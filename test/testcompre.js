 var url = 'group1/M00/00/00/wKgoFFk6GkeAJGNoAAJZYrnlfBg075.jpg';

 var thumb_x = [500, 500];

 var thumb = '500x500';

 //分辨率
 var width = thumb_x[0];
 var height = thumb_x[1];

 var first_dec = url.indexOf('/');
 var last_dec = url.lastIndexOf('/');
 var last_dec_dot = url.lastIndexOf('.');

 //  新文件名
 var tempname = url.substring(0, last_dec) + url.substring(last_dec + 1, last_dec_dot) + '_' + thumb + url.substring(last_dec_dot);
 console.log(tempname);