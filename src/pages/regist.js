import React, {Component} from 'react';
import LRHOC from '../components/LRHOC';


class Regist extends Component {
  render () {
    const {handleSubmit, composeChange, username, password, rePassword} = this.props;
    return (
      <>
        <form>
          <label>用户名：</label><input type="text" name="username" value={username} onChange={composeChange('username')}/><br/>
          <label>密码：</label><input type="password" name="password" value={password} onChange={composeChange('password')}/><br/>
          <label>确认密码：</label><input type="password" name="rePassword" value={rePassword} onChange={composeChange('rePassword')}/><br/>
        </form>
        <div>
          <button onClick={handleSubmit}>点击完成注册</button><br/>
        </div>
      </>
    )
  }
}
const registInfo = {
  title: '欢迎来到注册页面',
  jump2Path: '/login'
}
export default LRHOC(registInfo)(Regist)
