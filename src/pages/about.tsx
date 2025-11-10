import { createEffect, Suspense } from "solid-js";
import AboutData from "./about.data";

export default function About() {
  const name = AboutData();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="">
      <p> </p>
      <br/><br/><br/><br/><br/><br/><br/>
      <h2 class="text-5xl">Privacy policy</h2>
      <br/><br/>
      <p>
        Política de Privacidad

        Asistente de Maquillaje / Makeup Assistant
        Última actualización: Enero 2025

        Resumen Ejecutivo: Esta aplicación NO recopila, almacena ni comparte datos personales de los usuarios. Tu privacidad es nuestra prioridad.
        1. Información que NO Recopilamos
        La aplicación Asistente de Maquillaje está diseñada con privacidad desde el inicio:

        No requiere registro de usuario
        No solicita nombre, email o datos personales
        No almacena historial de búsquedas o preferencias
        No accede a cámara, galería o archivos del dispositivo
        No recopila ubicación geográfica
        No utiliza cookies o rastreadores
        2. Cómo Funciona la App
        Asistente de Maquillaje genera recomendaciones de maquillaje en tiempo real usando inteligencia artificial:

        El usuario selecciona tipo de cara, tono de piel y ocasión
        La app envía estas preferencias a un servicio de IA externo
        El servicio devuelve recomendaciones personalizadas
        Las recomendaciones se muestran en pantalla y NO se guardan
        Importante: Cada sesión es independiente. No guardamos tu historial.

        3. Servicios de Terceros
        3.1 Inteligencia Artificial (OnSpace Cloud)
        Usamos servicios de IA para generar recomendaciones:

        Solo enviamos las 3 preferencias seleccionadas (tipo cara, tono piel, ocasión)
        No enviamos identificadores personales
        Las respuestas no se asocian a ningún usuario específico
        3.2 Enlaces Externos (Amazon, Sephora)
        La app incluye botones para comprar productos sugeridos:

        Los enlaces abren sitios web externos (Amazon.com, Sephora.com)
        No rastreamos si haces clic o compras
        Esos sitios tienen sus propias políticas de privacidad
        No recibimos comisiones ni información sobre tus compras
        3.3 Tutoriales de YouTube
        Los videos de tutoriales provienen de YouTube:

        Los enlaces abren YouTube en tu navegador o app
        YouTube puede recopilar datos según su política
        No tenemos control sobre el contenido o privacidad de YouTube
        4. Permisos de la App
        La aplicación solicita los siguientes permisos en Android:

        INTERNET: Necesario para conectarse al servicio de IA y generar recomendaciones
        ACCESS_NETWORK_STATE: Verificar si hay conexión a internet disponible
        Solo eso. No solicitamos cámara, ubicación, contactos ni otros permisos invasivos.

        5. Almacenamiento Local
        La app guarda mínima información en tu dispositivo:

        Idioma seleccionado: Para recordar tu preferencia (ES, EN, FR)
        Nada más se almacena localmente
        Puedes borrar estos datos desinstalando la app.

        6. Seguridad
        Medidas de protección implementadas:

        Comunicación cifrada (HTTPS/SSL) con servicios externos
        No almacenamos contraseñas (la app no tiene login)
        No guardamos datos sensibles en el dispositivo
        7. Uso por Menores
        Esta aplicación es apta para todos los públicos (PEGI 3):

        No contiene publicidad
        No recopila datos de menores
        No requiere supervisión parental para privacidad
        8. Cambios en Esta Política
        Si actualizamos esta política de privacidad:

        Publicaremos la nueva versión en esta URL
        Actualizaremos la fecha de "Última actualización"
        Te notificaremos mediante actualización de la app si los cambios son significativos
        9. Tus Derechos (GDPR/CCPA)
        Como no recopilamos datos personales:

        No hay datos que solicitar, corregir o eliminar
        No compartimos información con terceros
        No vendemos datos de usuarios
        Si en el futuro agregamos funciones que requieran datos, actualizaremos esta política y solicitaremos tu consentimiento.

        10. Contacto
        Si tienes preguntas sobre esta política de privacidad:

        Email: privacy@makeupassistant.app
        App: Asistente de Maquillaje v1.0.0
        Desarrollador: Creativoapps

        Resumen: Usamos tu app de forma completamente anónima. Seleccionas preferencias, obtienes recomendaciones de IA, y listo. No guardamos nada. Tu privacidad está 100% protegida.
        Asistente de Maquillaje - Tu consultor personal de belleza

        © 2025 - Todos los derechos reservados
      </p>
    </section>
  );
}
