/*   
  Project by Zua 
  https://github.com/thatziv/webhook 
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        var avatar = $('#avatar').val();
        $.post(link, {"content": content, "username": username, "avatar_url": avatar,});

    });
});
