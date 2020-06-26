function deleteBill(id) {


    console.log("Delete function works", id);

    const arr = data.filter(e => e.id !== id);
    // activity = new Activity;

    activity.deleteItem(id);
    activity.getItems();

    data = arr;

    globalFunctionSetting();
    fnSettings();

}