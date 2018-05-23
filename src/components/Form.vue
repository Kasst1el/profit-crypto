<template>
	<form action="" class="form">
			<div class="form__wrap">
				<div class="form__group">
					<input type="text" class="input form__input" placeholder="Имя">
				</div>
				<div class="form__group">
      		<input type="text" class="input form__input" placeholder="Email">
      	</div>
      	<div class="form__group">
      		<input type="text" class="input form__input" placeholder="Тел.">
      	</div>
			</div>     
			<span class="form__cover">
				{{ $t("message.send_an_application") }}
			</span> 
      <button type="submit" class="button form__button">
        {{ $t("message.send") }}
      </button>
    </form>
</template>

<script>
  export default {
    name: 'Form'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.form {
    z-index: 20;
    position: absolute;
    left: calc(30vw + 1px);
    bottom: 0;
    width: calc(20vw - 2px);
    height: 3.625em;
    overflow: hidden;
    transition: 0.4s linear;
  }
  .button {
    width: 100%;
    height: 3.625em;
    font-family: "CourierNew", sans-serif;
    font-weight: 700;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    outline: none;
    box-shadow: none;
    border: none;
    position: absolute;
    bottom: 0;
    z-index: 10;
    color: #fff;
    background: #0C0C0C;
    bottom: -3.625em;
    transition: 0.2s linear 0.4s;
  }
  .form:hover .button {
		bottom: 0;
  }
  .form__cover {
		position: absolute;
		width: 100%;
    height: 3.625em;
    background: #fff;
    color: #0C0C0C;
    font-family: "CourierNew", sans-serif;
    font-weight: 700;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
	}
  .input {
    padding: 0.625em 0;
    width: 100%;
    font-size: 0.625em;
    font-family: "CourierNew", sans-serif;
    font-weight: 700;
    border: none;
    position: relative;
  }
  .input:focus {
  	outline: none;
  }
  .form__group {
  	display: flex;
  	flex-wrap: wrap;
  	position: relative;
  	width: 100%;
  	margin: 0 0 2em 0;
  }
  .form__group:first-child {
		margin-top: 1.75em;
  }
  .form__group:last-child {
		margin-top: 0.75em;
  }
  .form__group:after {
  	content: '';
  	position: absolute;
  	bottom: 0;
		left: 0;
		width: 0;
		height: 1px;
		background: rgba(0, 0, 0, 0.5);
		transition: 0.6s linear;
  }
  .form__wrap {
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: column;
		padding: 0;
		background: #fff;
		height: 0;
		overflow: hidden;
		transition: 0.4s linear;
		padding: 0 4.1vw 0 2.9vw;
		height: 13em;
  }
  .input::-webkit-input-placeholder {
  	color: #000;
  }
	.input::-moz-placeholder {
		color: #000;
	}
	.input:-moz-placeholder {
		color: #000;
	}
	.input:-ms-input-placeholder {
		color: #000;
	}
	.form:hover {
		height: 16.625em;
	}
	.is-menu .form:hover {
		height: 20vw;
	}
	.form:hover .form__group:after {
		width: 100%;
	}






























</style>
