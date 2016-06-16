<style>
.focused-form .login-logo {
    text-align: center;
    display: block;
    margin-top: 120px;
    margin-bottom: 50px;
}
</style>
<template>
    <div class="container" id="registration-form">
	<a class="login-logo"><img></a>
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<div class="panel panel-default">
				<div class="panel-heading"><h2>注册账号</h2></div>
				<div class="panel-body">
					<form action="" class="form-horizontal">
						<div class="form-group">
							<label class="col-xs-4 control-label">姓名</label>
	                        <div class="col-xs-8">
	                        	<input type="text" class="form-control" placeholder="请输入姓名">
	                        </div>
						</div>
						<div class="form-group">
							<label class="col-xs-4 control-label">用户名</label>
	                        <div class="col-xs-8">
	                        	<input type="text" class="form-control" placeholder="请输入用户名">
	                        </div>
						</div>
						<div class="form-group">
							<label class="col-xs-4 control-label">邮箱</label>
	                        <div class="col-xs-8">
	                        	<input type="text" class="form-control" placeholder="请输入邮箱">
	                        </div>
						</div>
						<div class="form-group">
							<label class="col-xs-4 control-label">请输入密码</label>
	                        <div class="col-xs-8">
	                        	<input type="password" class="form-control" placeholder="请输入密码">
	                        </div>
						</div>
						<div class="form-group">
							<label class="col-xs-4 control-label">再次输入密码</label>
	                        <div class="col-xs-8">
	                        	<input type="password" class="form-control" placeholder="请再次输入密码">
	                        </div>
						</div>
						<div class="form-group">
							<div class="col-xs-12">
								<div class="checkbox icheck">
									<label>
                                        <input type="checkbox" /> 我同意 <a href="#">用户协议</a></label>
								</div>
							</div>
						</div>
						
					</form>
					<div class="panel-footer">
						<div class="clearfix">
							<a href="extras-login.html" class="btn btn-default pull-left">登录</a>
							<a href="extras-registration.html" class="btn btn-primary pull-right">提交</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
    export default {
        el:"#app"
    }
</script>