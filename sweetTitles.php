<?php

/*

Plugin Name: sweetTitles

Plugin URI: http://blueandhack.com/wordpress/832.html

Description: Sweet Titles 这个名字源自于改变 Title 提示效果的 js 插件 Sweet Titles Finalized,此插件使得 title 提示效果变得美观，而且可以显示出你将要点击的链接的 url，让用户知道自己将要去哪里，同时提升了用户感受度。

Version: 1.0

Author: blueandhack

Author URI: http://blueandhack.com
*/

function sweetTitles(){
	$css_url = get_bloginfo("wpurl") . '/wp-content/plugins/sweetTitles/css/style.css';
	
	$script_html = '<script type="text/javascript" src="' . get_bloginfo('wpurl') . '/wp-content/plugins/sweetTitles/js/jquery.sweetTitles.js"></script>';
	
	$jq_url = '<script type="text/javascript" src="' . get_bloginfo("wpurl") . '/wp-content/plugins/sweetTitles/js/jquery-1.3.1.min.js"></script>';
	
	echo "\n" . '<link rel="stylesheet" href="' . $css_url . '" type="text/css" media="screen" />' . $jq_url . $script_html;
	}
	
add_action('wp_head', 'sweetTitles');

?>