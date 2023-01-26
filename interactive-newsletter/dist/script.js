var text = "<b> Holaaa fliperos! </b> <br><br>Hace días que teníamos como idea publicar este Newsletter pero la vorajine de avances tecnológicos en la industria de Generative AI, el desarrollo de <a href='https://www.flipando.ai/'>Flipando.ai</a>   y la caída de <a href='https://chat.openai.com/'>ChatGPT</a>  en los últimos días nos ha hecho que crear, editar y publicar este contenido nos lleve un poquito más de tiempo. <br><br>Pero acá estamos flipando nuevamente. Y vamos a aprovechar para presentarnos y contarles que estuvimos haciendo en el primer mes del año y que pueden esperar de nosotros en los meses que se vienen. <br><br>Para aquellos que aun no nos conocen personalmente. Les contamos que por ahora somos Yves, Dana y Maia quienes sentados en un bar de Montevideo por Octubre empezamos a soñar con la idea de acercar las tecnologías de Generative AI a todos nuestros amigos, familiares y comunidad. Mientras tomábamos vermu filosofábamos sobre cómo estos nuevos avances tecnológicos nos van a impactar y transformar a todos. <br><br>Convencidos de la necesidad de democratizar el acceso a AI para que ningún ser humano se quede atrás es que nos pusimos a construir Flipando juntos. <br><br><i>Flipando es un equipo de seres humanos creativos, apasionados y curiosos que están motivados por la misión de generar soluciones creativas con tecnología disruptiva e innovación. Desde Flipando, nos mueve la misión de democratizar y compartir el conocimiento y las herramientas de IA que van a sacudir a la mayoría de industrias y trabajos actualmente existentes.</i> <br><br>Desde nuestra creación, estuvimos trabajando fuertemente en desarrollar dos MVPs para validar el product market fit, y estamos contentos de anunciar que recibimos gran apoyo de varias instituciones y organizaciones que comparten nuestra misma misión. Además ya se anotaron más de 50 beta testers a  ayudarnos con su feedback. A todos ellos desde ya muchas gracias por animarse y saltar juntos a esta nueva era de creatividad.Estamos dedicados a democratizar el acceso a las herramientas y conocimientos de IA, y estamos emocionados de ver que de a poquito lo estamos logrando.<br><br>En específico, queremos compartir con ustedes algunas de estas pequeñas acciones que nos están acercando a nuestra ambiciosa misión:<br><br> <ul> <li>Patrocinamos la primera Prompt Battle de Latam en el Punta Tech Meetup el 9 de enero, la cual fue un gran éxito y nos dejo una gran cantidad de aprendizajes.</li> <a href='https://ibb.co/4VdqT96'><img src='https://i.ibb.co/1m6gqhD/5e78eeab-c2e1-4912-a3de-5cc30942e1ae.jpg' alt='5e78eeab-c2e1-4912-a3de-5cc30942e1ae' border='0' style='width:50%;'></a> <br><br><li> Participamos como Guest Lecturers y jurado en el pitch competition del MIT-Global Startup Lab y UTEC .<a href='https://ibb.co/sQywv71'><img src='https://i.ibb.co/xGJjSZg/T9A1289.jpg' alt='T9A1289' border='0' style='width:50%;'></a> </li> <br><br><li> Lanzamos la convocatoria abierta para la <a href='https://magmafutura.com/Masterclass-AI-Flipando' >Masterclass de Generative AI 101</a> . Presencial en Magma Futura, Montevideo el día 7 de Febrero. <br> <a href='https://ibb.co/qdmGttL'><img src='https://i.ibb.co/bPNhSSj/PLANTILLA-1-Mesa-de-trabajo-1.jpg' alt='Masterclass Flipando Generative AI' border='0'style='width:50%;';'></a></li><br> <br><li> Establecimos varios partnerships para trainings y capacitaciones sobre Generative AI con startups, enterprises e instituciones sin fines de lucro que nos permitirá alcanzar a más de 350 nuevos entusiastas de AI.<br> <br></li> </ul>En estos primeros meses, aprendimos mucho sobre la importancia de colaborar con otras organizaciones y empresas para alcanzar objetivos comunes. También hemos visto el gran interés que existe en aprender sobre IA y las nuevas tecnologías y sobretodo la necesidad de pensar y desarrollar soluciones accesibles, inclusivas, responsables y transparentes. <br> <br> Se nos viene un mes de Febrero con muchísima actividad pero los iremos manteniendo al tanto sobre estos pequeños avances, logros y desafíos que vamos encontrando a medida que crecemos. <br><br>Así es! Estamos creciendo y felices de conectar con más personas que estan flipando como nosotros. Así que escríbinos a hola@flipando.ai para seguir en contacto. <br><br>Gracias y salud!";
var i = 0;
var speed = 30;
var currentText = "";


function typeWriter() {
  if (i < text.length) {
    currentText += text[i];
    document.getElementById("typing-text").innerHTML= currentText;
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("start-button").onclick = function() {
  typeWriter();
};

document.getElementById("stop-button").onclick = function() {
  i = text.length;
};


document.getElementById("skip-button").onclick = function() {
  document.getElementById("typing-text").innerText = text;
};

document.getElementById("skip-button").onclick = function() {
  clearTimeout(typeWriter);
  document.getElementById("typing-text").innerHTML = text;
};