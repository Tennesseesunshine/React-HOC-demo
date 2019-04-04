import React, {Component} from 'react';
import LRHOC from '../components/LRHOC';

class Login extends Component {
  render () {
    const {handleSubmit, composeChange, username, password, rePassword, jump2Page, name, age} = this.props;
    return (
      <>
        <form>
          <span>接受来父组件的props参数name: {name ? name : '-'}, age: {age ? age: '-'}</span>
          <br/>
          <label>用户名：</label><input type="text" name="username" value={username} onChange={composeChange('username')}/><br/>
          <label>密码：</label><input type="password" name="password" value={password} onChange={composeChange('password')}/>
        </form>
        <div>
          {
            name && age ? '' :
            <span>没有账号？<a href="javascript:void(0)" onClick={jump2Page}>点我去注册</a></span>
          }
          <button onClick={handleSubmit}>点击完成注册</button><br/>
        </div>
      </>
    )
  }
}

const loginInfo = {
  title: '欢迎来到登录页面',
  jump2Path: '/regist'
}

export default LRHOC(loginInfo)(Login)
