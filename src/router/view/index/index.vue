<!--<template>
  <div class="contentpanel">
    <ol class="breadcrumb breadcrumb-quirk">
      <li class="active"><i class="fa fa-home mr5"></i> 主页 <p>{{$global.user.name}}</p></li>
    </ol>
    <div class="row panel-quick-page">
      <div class="col-xs-4 col-sm-5 col-md-4 page-user">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Manage Users</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-person-stalker"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 page-products">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Manage Products</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="fa fa-shopping-cart"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-3 col-md-2 page-events">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Events</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-ios-calendar-outline"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-3 col-md-2 page-messages">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Messages</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-email"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-5 col-md-2 page-reports">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Reports</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-arrow-graph-up-right"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 page-statistics">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Statistics</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-ios-pulse-strong"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 page-support">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Manage Support</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-help-buoy"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 page-privacy">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Privacy</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-android-lock"></i></div>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-2 page-settings">
        <div class="panel">
          <div class="panel-heading">
            <h4 class="panel-title">Settings</h4>
          </div>
          <div class="panel-body">
            <div class="page-icon"><i class="icon ion-gear-a"></i></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  require("./index.css");
  export default {
      title:"哈哈"
  }
</script>-->


<template>
  <div class="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>