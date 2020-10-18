interface Database {
  save(listOfNumbers: number[]): void;
}

class ListModel {
  list: number[] = [];

  constructor(private db: Database) {}

  add(element: number) {
    this.list.push(element);
  }

  removeLast() {
    this.list.pop();
  }

  getList(): number[] {
    return this.list;
  }

  saveToDatabase(): void {
    this.db.save(this.list);
  }
}

describe('test ', () => {
  let listModel: ListModel;
  let mockDB: jasmine.SpyObj<Database>;

  beforeEach(() => {
    mockDB = jasmine.createSpyObj<Database>('Database', ['save']);
    listModel = new ListModel(mockDB);
  });

  it('list is empty at first', () => {
    const flist = listModel.getList();
    expect(flist.length).toBe(0);
  });

  it('when add an item, get list return that item and count is 1', () => {
    listModel.add(452);
    const glist = listModel.getList();
    expect(glist.length).toBe(1);
    expect(glist).toEqual([452]);
  });

  it('when select save, it should call database with proper values', () => {
    listModel.add(45);
    listModel.saveToDatabase();
    expect(mockDB.save).toHaveBeenCalledWith([45]);
  });

  it('when removelast, element list decreases by one and get list returns proper values', () => {
    listModel.add(45);
    listModel.add(12);
    listModel.add(41);
    listModel.add(6);

    const arrBeforeRemove = [...listModel.getList()];
    listModel.removeLast();
    const removedOne = [...listModel.getList()];
    listModel.removeLast();
    const removedTwo = [...listModel.getList()];

    expect(arrBeforeRemove).toEqual([45, 12, 41, 6], 'arrBeforeRemove');
    expect(removedOne).toEqual([45, 12, 41], 'removeOne');
    expect(removedTwo).toEqual([45, 12], 'removeTwo');
    expect(mockDB.save).not.toHaveBeenCalled();
  });
});
