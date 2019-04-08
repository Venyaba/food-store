import React,{Component} from 'react';


const ingredientsList = str => {
    let arr = str.split(',')

    return arr
}


class NewMenuItem extends Component{

    state={
        newItem:{
            name:'',
            price:'',
            image:'',
            description:'',
            ingredients:[],
            category:''
        }
    }

    componentDidMount() {
             this.props.fetchCategories()


    }

    handleChange = (e)=>{

        this.setState({newItem: {
                ...this.state.newItem,
                [e.target.name]: e.target.value,
            }})

    }
    handleChangeIngredients = e =>{
         this.setState({newItem:{
            ...this.state.newItem,
               [e.target.name]: ingredientsList(e.target.value)
            }})
        }
     handleAddMenuItem = e =>{
         e.preventDefault()
          this.props.addMenuItem(this.state.newItem)

         this.props.history.push({
             pathname: '/menu'
         })

        this.props.fetchMenu()
     }

    render(){
        return(
            <div className= 'newMenuItem__box' >
                <h1>Post new menu item</h1>
                <form className='newMenuItem' onSubmit={this.handleAddMenuItem} >
                <label>
                    <h3>Name:</h3>
                    <input type= "text" name='name' onChange={this.handleChange}/>
                </label>
                    <label>
                        <h3>Price</h3>
                        <input type = 'text' name="price" onChange={this.handleChange}/>
                    </label>
                    <label>
                        <h3>Image:</h3>
                        <input type="text" name= 'image' onChange={this.handleChange}/>
                    </label>

                <label>
                    <h3>Description:</h3>
                    <textarea  type= "text" cols={30} rows={5}
                               name ='description'
                               onChange={this.handleChange}>

                    </textarea>
                </label>
                    <label>
                        <h3> Ingredients:</h3>
                        <input type = 'text' name='ingredients' onChange={this.handleChangeIngredients}/>
                    </label>

                <label>
                    <h3> Category:</h3>
                    <select name='category'
                            onChange={this.handleChange}
                    >
                        {this.props.categories.map(o => (
                            <option key={o.id} value={o.name}>
                                {o.name}
                            </option>
                        ))}
                    </select>
                </label>

                    <button type='submit'> Создать</button>

                </form>

            </div>
        )
    }
}

export default NewMenuItem