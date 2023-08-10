# vue-google-identity-login-btn

#### Are you using vue 3?
> you can check [this playground](https://play.vuejs.org/#eNqNVltv2zYU/iusXqQAttyi3cO8JGiSBoOLLima7GGYhoCWjiWmFKmRlO0s9X/fIambZWeZkcDW4bl8PJdP5zm4qKp4XUMwD051qlhlzhPBykoqQ36VMufwReZMXBpBVkqWJIxnXnxZGyOFNQ0TkQjYOpMMVrTmhjxbGSEZU5AatgY9tyKCn32nVrabNMrU0Oik1VNgaiXaJ0JSzkCYRTYn4R+3v397uPqyuL65f1h8wvD2fDd0VYIpZNYHlcKHvahNcVenKWgdPW7MlYIMnTLKdRcXI0mhJYeYy3ys9MtQx5BKyRXj8AmBkzPy+e72Jq6o0hARauRyZBzrijMThXF48ue7v07I2NkzEbSECalYijfHH1BSxskOPQ/i7BlZlIYuOUQvGbdBfHYSgX+ns67O+GCgrDg1gE+EnGZsjYmmWp8lwdKIKQYxSeDO7MedswwPc5fOKaaIiSlqJgFZT8dC1Hvu6jYhXKaUwzwEESKU3qv9XGEgJmqqulAzjNWotL9PZwO0+KjNEweiU1lBhpK4RexLmTFMOH2akxWHrUuD/TFtWlKKOaaQ16VwR5SzXEwZ+semSREwKCcvgOWFmZOf3r6trBPMXx/mHGOsfbANy0wxJ+8bNUIMbM3UeR3489m3qM+DSeCnbFrSKn7UUuAEOldJc6CToOvfJMA5s89JUBhT6flslmYCzTLgbK1iAWYmqnL2EdVmqsZcljDNZPnxffw+/oDp02YojkGX06WSGw0KnSQBjk0XZobCNaipApGBAvV/w47MhqFHRwfh2+bEpBgsp1ixfJSSVJYVToC6rWzp9lNDOZebz05mVA3dXdIC0u9H5I966+/0VYFDNri/oSoHbHl7fH13g0UcHJYyq3lThhcOvwEOZW0xerXLWmQIe6Dn0C5chZnI7/X11oDQ7aUs0JbImnpc/cfVe7iY7UEWxxQ9ZHccMft/QNhu9EqJXQJIshHwCVkykSHICVkLmcEJOTtv9VxuLTIpsLl/83QbIds0A8zBdJOPBNY4iteU1xC3B512++2J0NMIvhyQFLATNNo3Ue3HPFUwHzm0MvLjByZEGyoyqjKb8M5EF/TQxgm9kSUEKvKaI/0M7UwB5WEsK/R2sjacCdc+vQ12xYEJyryFpQ2kOXjYMFPsY2T/HEJEmbdDZPl+nIZMRxZe6m1ATz+8+3lklMsHR0olFuDQeHjaAHbUteekobp9Wye0JqGjwLBV37kaH6uv3wBch7oWAR4z3xHHtO8Q1UJcfF2gZibT2iKMUwX4LrjmWBCBL1bf4OFJaz+yjDWYC2MUW9YGUFul4YSELa/RNLWtr2NvFSPhzHLNZr5Xe6dd8AJoFtOqQk67KhjPolG4F2FIwSW1N14IZoaDOrz7qhbuJXWg5BakrhYN2A48y2KGBrhuYOtEA8V2f3pgONvdK3nvHIlpSdPvc3IrmhWpP7Z7xADd0cCe3RuUQ89dypCqmmJdPi3ahO31wcnkYPp7Tz277I6mqsMdIa9Xe3ly/BWnZuv+j22D1sQ2VLOtvRbrBf7rYw6XSM+ePRq2it64dh/ILNvgG5EI2JBrpaSKwvsCmmwgO+SCMAyL/EGRchSux3/XuMloQoXdGJDwcOdsmjvs0ffcasOS6M2rmXgdk1+uj+3UpKxxYpdg3yqI0upYEkXYTaL6OXJpbb56kuh3U3wIdv8CzOZEhA==) based on this project!

<br>

> Simple Google Login Button for vue ( Google Identity Services ).

<br>

---

 [vue-google-identity-login-btn](#vue-google-identity-login-btn)
  - [install](#install)
  - [Use](#use)
  - [Customize your login button](#customize-your-login-button)
  - [Full example](#full-example)



<br>

## install:

### yarn:

> $ yarn add vue-google-identity-login-btn

### npm:
> npm install --save vue-google-identity-login-btn

---

## Use:

1. Import the library in your component and adds the directive, data, and methods required:
   
``` js
import GoogleSignInButton from 'vue-google-identity-login-btn';
``` 

```js
export default {
  
  directives: {
    GoogleSignInButton
  },

  data() {
    return {
      clientId: 'YOUR-GOOGLE-CLIENT-ID'
    }
  },

  methods: {
    onGoogleAuthSuccess (jwtCredentials) {
      console.log(jwtCredentials);
      const profileData = JSON.parse( atob(jwtCredentials.split('.')[1]) );
      console.table(profileData);
    }
  },
}
</script>
```

<br>

2. Create an element with the `v-google-identity-login-btn` directive in your template:

```html
<div style="display: flex; justify-content: center" 
  id="google-login-btn"
  v-google-identity-login-btn="{ clientId }">
    Continuar con google
</div>
```
<br>

> Warning: If you are seeing this message and you have issues (the Google button is not showing and you have an error in the console), probably you need to specify the `width` property with an Number value
> ( `v-google-identity-login-btn="{ clientId, width: 300 }">` ).
> you can see more details [here](https://github.com/eduardova/vue-google-identity-login-btn/pull/1)

### `important:` The container `id` (in this case `google-login-btn`) is required.

<br>

> Tip: dont forget [validate the jwtCredentials in yout backend](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)

<br>

## Customize your login button:

<br>

### Put attention in the object from the directive: 


> v-google-identity-login-btn="`{ clientId }`"

<br>

This object can contains the [attributes for the GsiButtonConfiguration](https://developers.google.com/identity/gsi/web/reference/js-reference#GsiButtonConfiguration) that change your login button theme, lang, size, etc.

<br>

## Default and required options:

attribute|status|type|default|
:---|:---|:---|:---
clientId|required|string|-
type|optional|string|"standard"
shape|optional|string|"rectangular"
theme|optional|string|"outline"
text|optional|string|"continue_with"
size|optional|string|"large"
locale|optional|string|"es-419"
logo_alignment|optional|string|"center"
width|optional|string|"300px"

<br>

## full example:

```html
<template>

    <div class="btn-cont">
      <div><h2>vue-google-identity-login-btn</h2></div>
      <div id="google-login-btn" v-google-identity-login-btn="{ clientId, locale:'en' }">
          Continuar con google
      </div>
    </div>

</template>

<script>
import GoogleSignInButton from 'vue-google-identity-login-btn';

export default {
  
  directives: {
    GoogleSignInButton
  },

  data() {
    return {
      clientId: 'YOUR-CLIENT-ID'
    }
  },

  methods: {
    onGoogleAuthSuccess (jwtCredentials) {
      // console.log(jwtCredentials);
      const profileData = JSON.parse( atob(jwtCredentials.split('.')[1]) );
      const { name, picture, email } = profileData;
      console.table({ name, picture, email });
    }
  },
}
</script>

<style scoped>
.btn-cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
}
.btn-cont > div {
  width: 300px;
  text-align: center;
}
</style>

```

### result:
![result](example/with-single-file-component/escritorio.gif)
