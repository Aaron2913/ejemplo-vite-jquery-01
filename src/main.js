import './style.css';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;

async function iniciarApp() {
  await import('jquery-ui-dist/jquery-ui');
  await import('jquery-ui-dist/jquery-ui.css');

  $(function () {
    $('#fecha_nacimiento').datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: '1900:2100'
    });

    $('#formulario-datos').on('submit', function (event) {
      event.preventDefault();

      const nombre = $('#nombre').val();
      const apellido = $('#apellido').val();
      const fecha = $('#fecha_nacimiento').val();

      $('#mensajeFinal1').text(nombre || 'Sin datos');
      $('#mensajeFinal2').text(apellido || 'Sin datos');
      $('#mensajeFinal3').text(fecha || 'Sin datos');
    });
  });
}

iniciarApp();
