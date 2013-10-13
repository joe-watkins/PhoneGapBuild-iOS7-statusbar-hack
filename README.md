# iOS7 - PhoneGap - Status Bar Bugfix

_by Joe Watkins - Oct 2013_

These files are a quick 'band-aid' fix for a bug present in Adobe's PhoneGap Build ver. 2.9.0 which offers and inconsistent status bar at the top of the web app. [View the post in the support forum relating to this topic]("http://community.phonegap.com/nitobi/topics/inconsistent_ios_7_status_bar_build_problem")

Adobe mentions a fix for this coming soon,..but until then :)

You may need to adjust this to fit into your project.

## Usage

1. Grab the javascript from the /js folder and inject it into your project's javascript. 

2. Add/adjust the contents of the /css/style.css file to your project. *if you change class names you can update the javascript function accordingly.

## Requirements
Be sure to include [jQuery]("http://jquery.com/") in your project for this script to function.

## JS Overview
The JS function accepts a few variables. The class that you want to add to the body of the document for styling, the class you'd like to give to the element that you will add to the dom, and switch to test in browsers that are not iOS7 based. Use 1 if you'd like to test in an alternative browser.

	// pass class for body, added element's class, 0 or 1
	// 1 = for non ios7 testing
	ios7StatusBarBump('ios7-detected','status-bar-bump',0);