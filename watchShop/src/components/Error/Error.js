const ROOT_ERROR = document.getElementById('error');
class Error {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Шось пішло не так</h3>
                    <p>Походу не та ссилка або знов забув запустити сервер</p>
                </div>
        	</div>
        `;
        if (ROOT_ERROR != null) {
            ROOT_ERROR.innerHTML = html;
        }
    }
}

export const errorPage = new Error();
