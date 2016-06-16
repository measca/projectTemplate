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
	<a class="login-logo"><img></a>
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
			<div class="panel panel-default">
				<div class="panel-heading"><h2>忘记密码</h2></div>
				<div class="panel-body">
					<form action="" class="form-horizontal">
						<div class="form-group">
	                        <div class="col-xs-12">
	                        	<p>请输入用户名</p>

	                        	<div class="input-group">
									<span class="input-group-addon">
										<i class="fa fa-user"></i>
									</span>
									<input type="text" class="form-control" placeholder="请输入用户名">
								</div>
	                        </div>
						</div>
						<div class="panel-footer">
							<div class="clearfix">
								<a href="login.html" class="btn btn-default pull-left">返回</a>
								<button class="btn btn-primary pull-right">提交</button>
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
        el:"#app"
    }
</script>