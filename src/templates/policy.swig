{% extends "base.swig" %}

{% block body %}
<div class="noCol">
		<h1>{{ title }}</h1>
		{{ contents | safe }}
</div>
{% endblock %}
