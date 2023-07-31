import Vue from 'vue'

export default Vue.directive('google-identity-login-btn', {
  bind: function (el, binding, vnode) {
    
    checkComponentMethods();
    
    let clientId = binding.value.clientId;
    
    const googleBtnConfigs = {
      type: binding.value.type || "standard",
      shape: binding.value.shape || "rectangular",
      theme: binding.value.theme || "outline",
      text: binding.value.text || "continue_with",
      size: binding.value.size || "large",
      locale: binding.value.locale || "es-419",
      logo_alignment: binding.value.logo_alignment || "center",
      width: binding.value.width || '300px'
    };

    const googleLoginButtonId = el.id;

    const googleSignInAPI = document.createElement('script')
    googleSignInAPI.setAttribute('src', 'https://accounts.google.com/gsi/client')
    document.head.appendChild(googleSignInAPI)
    googleSignInAPI.onload = InitGoogleButton

    function InitGoogleButton() {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: OnSuccess
      });

      google.accounts.id.renderButton(
        document.getElementById(googleLoginButtonId), googleBtnConfigs
      );
    }

    function OnSuccess(resp) {
      vnode.context.onGoogleAuthSuccess(resp.credential);
    }

    function checkComponentMethods() {
      if(!el.id)
        throw new Error('The google sign in container requires an "id" attribute');
      
      if (!vnode.context.onGoogleAuthSuccess)
        throw new Error('The method onGoogleAuthSuccess must be defined on the component')
    }
  }
});
