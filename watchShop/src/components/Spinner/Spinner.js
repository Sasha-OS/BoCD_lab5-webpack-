const ROOT_SPINNER = document.getElementById('spinner');
class Spinner {
    handleClear() {
        if (ROOT_SPINNER !=null ) {
            ROOT_SPINNER.innerHTML = '';
        }
    }

    render() {
        const html = `
        	<div class="spinner-container">
        		<img class="spinner__img" src="components/Spinner/img/spinner.svg" />
        	</div>
        `;
        if (ROOT_SPINNER != null) {
            ROOT_SPINNER.innerHTML = html;
        } 
    }
}

export const spinnerPage = new Spinner();




