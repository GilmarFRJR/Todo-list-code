class Item{
    
    static id = 0

    constructor(txt){

        this.txtItem = txt
        this.id = Item.id++
        this.marcado = false

    }

}


export default Item