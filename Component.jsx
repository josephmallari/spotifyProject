const React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<html>
				<head>
					<title></title>
					<link rel='stylesheet' src='/style.css'	/>
				</head>
				<body>
					<div>
						<h1>enter stuff</h1>
						<form>
							<input type="text" value={this.state.form} />
						</form>
					</div>
				<script src='/bundle.js' />
				</body>
			</html>
		)
	}
});
