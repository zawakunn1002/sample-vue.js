var app = new Vue({
    el: '#app',
    data: {
        addText: '',
        list:[],
        uniqueKey: 0,
    },
    methods: {
        addToDo() {
            if (this.addText) {
                this.list.unshift({
                    text: this.addText,
                    id: ++this.uniquKey
                });
            }
            this.addText = '';  //入力値初期化
        },
        deleteToDo(id) {
            var deleteIndex = '';
            var check = confirm('本当に削除しますか？');
            if (check === true) {    //アラートでOKが押下されたら
                this.list.some(function (value, index) {
                    if (value.id === id) {
                        deleteIndex = index;
                    }
                });
                this.list.splice(deleteIndex, 1);
            }
        }
    }
});