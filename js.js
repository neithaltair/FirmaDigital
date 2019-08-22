let socials = {
    facebook: {
      url: 'https://www.facebook.com/neith.altair.7',
      icon: 'https://drupal.ed.team/sites/default/files/social-icons/facebook-icon.png'
    } ,
    linkedin: {
      url: 'https://www.linkedin.com/in/neith-altair-machuca-bernal-84a1a3151/',
      icon: 'https://drupal.ed.team/sites/default/files/social-icons/linkedin-icon.png'
    },
    github: {
      url: 'https://github.com/neithaltair',
      icon: 'https://drupal.ed.team/sites/default/files/social-icons/github-icon.png'
    } 
  }
  
  let socialIcons = '';
  for(let social in socials) {
    socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
  }
  
  document.getElementById('sociales').innerHTML = socialIcons;