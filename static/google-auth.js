function onSuccess(googleUser) {
  const btnDom = document.getElementById('google-signin-button')
  const authData = googleUser.getAuthResponse()
  const profile = googleUser.getBasicProfile()
  const event = new CustomEvent('GOOGLE_AUTH', {
    detail: {
      authData: {
        idToken: authData.id_token,
        idpId: authData.idpId,
        loginHint: authData.login_hint,
        tokenType: authData.token_type,
      },
      profile: {
        id: profile.getId(),
        name: profile.getName(),
        imageUrl: profile.getImageUrl(),
        email: profile.getEmail(),
      },
    },
  })

  btnDom.dispatchEvent(event)
}

function onFailure(error) {
  console.log(error)
}

function renderButton() {
  gapi.signin2.render('google-signin-button', {
    scope: 'profile email',
    width: 240,
    longtitle: true,
    theme: 'light',
    onsuccess: onSuccess,
    onfailure: onFailure,
  })
}