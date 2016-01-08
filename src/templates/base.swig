<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>{{title}} | {{companyname}}</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
		<link rel="stylesheet" href="css/vendor.min.css">
        <link rel="stylesheet" href="css/app.min.css">
    </head>

{% if body %}
<body class="{{body}}">
{% else %}
<body>
{% endif %}
		{% include "partials/navbar.swig" %}
		<div class="container">
			<div class="main-content">
	        <!--[if lt IE 8]>
	            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	        <![endif]-->
			{% block body %} {% endblock %}
			</div>
		</div>
		{% include "partials/footer.swig" %}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
		<script src="js/vendor.min.js"></script>
		<script src="js/app.min.js"></script>
		{% if telephone %} {% include "partials/telephone.swig" %} {% endif %}
    </body>
</html>
