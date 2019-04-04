import React, {Component} from 'react';

// 这个高阶组件接受两个参数分别为数据参数和组件 第二次执行的时候返回带数据参数的新组件
export default (loginInfo) => (WrappedComponent) => {
  return class Form extends Component {
    state = {
      username: '',
      password: '',
      rePassword: ''
    }
    onChange = (name, val) => {
      this.setState({
        [name]: val
      })
    }
    composeChange  = (name)=> {
      return (e) => {
        this.onChange(name, e.target.value)
      }
    }
    handleSubmit = (e) => {
      e.preventDefault()
      const {password, username, rePassword} = this.state
      console.log(`用户名: ${username}, 密码: ${password}, 确认密码: ${rePassword}`)
      if (username && password && rePassword && loginInfo.jump2Path === '/login') {
        setTimeout(() => {
          this.props.history.push(loginInfo.jump2Path)
        }, 2000)
      }
    }

    jump2Page = () => {
      this.props.history.push(loginInfo.jump2Path)
    }
    render () {
      const fn = {
        composeChange: this.composeChange,
        handleSubmit: this.handleSubmit,
        jump2Page: this.jump2Page
      }
      return (
        <>
          <header>{loginInfo.title}</header>
          <WrappedComponent  {...this.props} {...this.state} {...fn}></WrappedComponent>
        </>
      )
    }
  }
}
