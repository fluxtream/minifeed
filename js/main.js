$(document).ready(function() {
	var FacetCreatedEvent = Parse.Object.extend("FacetCreatedEvent");
	var query = new Parse.Query(FacetCreatedEvent);
	query.equalTo("username", "candide");
	query.equalTo("serverName", "candide_local");
	query.limit(20);
	query.descending("start");
	var templateText = "{{#results}}" +
	"<tr>\r" +
		"\t<td>{{start}}</td>\r" +
		"\t<td>{{connectorName}}</td>\r" +
		"\t<td>{{objectType}}</td>\r" +
		"\t<td>{{description}}</td>\r" +
	"</tr>\r" +
	"{{/results}}\r";
	var template = Hogan.compile(templateText);
	
	query.find({
	  success: function(results) {
		var data = {};
		var resultsData = [];
		for (var i=0; i<results.length; i++) {
			var resultObject = {};
			resultObject.start = new Date(results[i].attributes.start);
			resultObject.connectorName = results[i].attributes.connectorName;
			resultObject.objectType = results[i].attributes.objectType;
			resultObject.description = results[i].attributes.description;
			resultsData.push(resultObject);
		}
		data.results = resultsData;
		var rendered = template.render(data);
		$("#feed").html(rendered);
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
});