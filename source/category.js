class Category{

    static all = []

    constructor({id, name}){
        this.id = id 
        this.name = name 


        this.element = document.createElement('li')
        this.element.id = `category-${id}`

        this.categoryList = document.getElementById('category-list')
 

        Category.all.push(this)
    }



    renderList() {
        this.element.innerHTML = `
        <h3>${this.name}</h3>
        `
        return this.element   
    }

    displayToDom(){
        this.categoryList.append(this.renderList())
        this.addEventListeners()
       
      
    }


    addEventListeners(){
        this.element.addEventListener('click', this.displayItems)
 
    }

    
        

    displayItems() {
        // debugger;
        console.log("ASdAS")
    }

    

}

