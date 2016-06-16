<style>
.focused-form .login-logo {
    text-align: center;
    display: block;
    margin-top: 120px;
    margin-bottom: 50px;
}
</style>
<template>
    <div class="container">
        <a class="login-logo">
            <img >
        </a>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h2>登录系统</h2>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal">
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="input-group">
                                        <span class="input-group-addon">
										<i class="fa fa-user"></i>
									</span>
                                        <input type="text" class="form-control" placeholder="请输入用户名">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <div class="input-group">
                                        <span class="input-group-addon">
										<i class="fa fa-key"></i>
									</span>
                                        <input type="password" class="form-control" placeholder="请输入密码">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-12">
                                    <a href="forgotpassword.html" class="pull-left">忘记密码?</a>
                                    <div class="checkbox-inline icheck pull-right pt0">
                                        <label>
										<input type="checkbox"></input>
										记住账号
									</label>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="clearfix">
                                    <a href="registration.html" class="btn btn-default pull-left">注册</a>
                                    <button type="submit" class="btn btn-primary pull-right">登录</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        el: "#app"
    }
</script>