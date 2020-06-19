import React, { Component } from 'react'
// ojb ต้องมี ปีกกา
class Class1 extends React.Component {
    state = {
        count: 0,
        text: "",
        data: [],
        check:false


    }
    plus = () => {
        this.setState({ count: this.state.count + 1 })
    }
    different = () => {
        this.setState({ count: this.state.count - 1 })
    }
    submit = (e) => {
        e.preventDefault()
        let data = [...this.state.data, this.state.text]
        this.setState({ data: data, text: "" })

    }
    change = (e) => {
        this.setState({ text: e.target.value })
        // console.log(e.target.value);
        console.log(this.state.text);
    }
    del = (index) => {
        console.log(index)
        let arr = [...this.state.data];
        // arr = arr.filter((items,n) => n!== index)
        this.setState({data:arr})
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.count}
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.different}>-</button>
                    <button onClick={() => this.setState({ count: 0 })}>reset</button>
                </div>

                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.text} onChange={this.change}>
                    </input>
                </form>


                <ul>
                    {this.state.data.map((items, index) => {
                        return <label><input type="checkbox"></input><li>{items}<button onClick={() => this.del(index)}>X</button></li></label>
                    })
                    }
                </ul>
            </div>
        )
    }
}

export { Class1 }