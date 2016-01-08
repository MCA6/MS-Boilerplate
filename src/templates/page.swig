{% extends "base.swig" %}

{% block body %}
<div class="row">
	<div class="col-sm-3">
		<img class="img-responsive logoHorz" src="images/logo_horizontal.jpg">
		{% if lcimage %}
		<img class="img-responsive sideImage" src="{{ lcimage }}">
		{% endif %}
	</div>
	<div class="col-sm-9">
		<img class="img-responsive" src="{{ rcimage }}">
		<h1>{{ title }}</h1>
		{{ contents | safe }}
	</div>
</div>
{% endblock %}
