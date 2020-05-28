let socials = {
    facebook: {
      url: '',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2504/2504965.svg'
    } ,
    linkedin: {
      url: 'https://www.linkedin.com/in/neith-altair-machuca-bernal-84a1a3151/',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2504/2504923.svg'
    },
    github: {
      url: 'https://github.com/neithaltair',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2504/2504911.svg'
    },
    whatsap: {
      url: '',
      icon: 'https://www.flaticon.es/premium-icon/icons/svg/2504/2504957.svg'
    }
  }
  
  let socialIcons = '';
  for(let social in socials) {
    socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:6px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
  }
  
  document.getElementById('sociales').innerHTML = socialIcons;