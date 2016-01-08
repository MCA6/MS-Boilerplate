{% extends "base.swig" %}

{% block body %}
<div class="noCol siteMap">
	<h1>Site Map</h1>
	<h5><a href="/">www.palms.school</a></h5>
	<div class="outerWrapper">
		{{ contents | safe }}
	</div>
</div>
{% endblock %}
