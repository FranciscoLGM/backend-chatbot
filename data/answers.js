const answers = [
  {
    intent: "saludo",
    response:
      "¡Hola! 😊 ¿Cómo andás? Estoy acá para ayudarte en lo que necesites.",
  },
  {
    intent: "saludo",
    response: "¡Buenas! 👋 ¿Cómo va eso? Estoy listo para asistirte.",
  },
  {
    intent: "saludo",
    response: "¡Hola! 😄 ¿Qué onda? Estoy acá para resolver tus dudas.",
  },
  {
    intent: "mostrar_menu",
    response:
      "¡Por supuesto! Acá tenés nuestro menú lleno de delicias 🍣. ¿Querés alguna recomendación o saber más sobre algún plato en particular?",
  },
  {
    intent: "mostrar_menu",
    response:
      "¡Claro! Este es nuestro menú 🍱. ¿Hay algo específico que te gustaría probar?",
  },
  {
    intent: "tomar_pedido",
    response:
      "¡Excelente elección! 🎉 ¿Qué te gustaría pedir? Contame qué se te antoja.",
  },
  {
    intent: "tomar_pedido",
    response: "¡Genial! 🍣 ¿Tenés algo en mente o necesitás recomendaciones?",
  },
  {
    intent: "preguntar_horarios",
    response:
      "Estamos abiertos todos los días de 12:00 PM a 10:00 PM. ¡Venite a disfrutar de una experiencia única! 🕛",
  },
  {
    intent: "preguntar_horarios",
    response:
      "¡Estamos listos para recibirte de 12:00 PM a 10:00 PM! 🍣 ¡No te quedes con el antojo!",
  },
  {
    intent: "preguntar_ubicacion",
    response:
      "Nos encontramos en la Calle Sushi, número 123. ¡Te esperamos con los brazos abiertos! 📍",
  },
  {
    intent: "preguntar_ubicacion",
    response:
      "¡Estamos ubicados en la Calle Sushi, número 123! ¡Ven a visitarnos! 😊",
  },
  {
    intent: "agradecimiento",
    response:
      "¡De nada! 😊 Si necesitás algo más o tenés alguna pregunta, no dudes en decírmelo.",
  },
  {
    intent: "agradecimiento",
    response:
      "¡Con gusto! Si hay algo más en lo que pueda ayudarte, acá estoy. 🌟",
  },
  {
    intent: "despedida",
    response:
      "¡Hasta luego! 👋 Esperamos verte pronto y que disfrutes de tu experiencia con nosotros.",
  },
  {
    intent: "despedida",
    response: "¡Chau! 😊 Que tengas un gran día y esperamos verte pronto.",
  },
  {
    intent: "preguntar_promociones",
    response:
      "¡Atención! 🎉 Actualmente tenemos una promo del 20% de descuento en pedidos para llevar. ¡No te lo pierdas! ¿Querés saber más sobre nuestros platos para llevar?",
  },
  {
    intent: "preguntar_promociones",
    response:
      "¡Genial! 🎊 Hay un 20% de descuento en pedidos para llevar. ¡Perfecto para disfrutar en casa!",
  },
  {
    intent: "reservar_mesa",
    response:
      "Por supuesto, ¿para cuántas personas te gustaría reservar y a qué hora? 🕒 Estoy acá para ayudarte a asegurar tu mesa.",
  },
  {
    intent: "reservar_mesa",
    response:
      "¡Claro! ¿Cuántas personas vienen y a qué hora te gustaría que te reservemos la mesa? 😊",
  },
  {
    intent: "preguntar_entrega",
    response:
      "Sí, ofrecemos servicio de delivery 🚚. ¿Te gustaría hacer un pedido ahora? ¡Estoy listo para ayudarte!",
  },
  {
    intent: "preguntar_entrega",
    response:
      "¡Así es! Hacemos entregas a domicilio. 📦 ¿Querés que te ayude a realizar un pedido?",
  },
  {
    intent: "preguntar_alergias",
    response:
      "Sí, tenemos opciones sin gluten y vegetarianas. 🌱 ¿Tenés alguna alergia o preferencia específica que debamos tener en cuenta?",
  },
  {
    intent: "preguntar_alergias",
    response:
      "¡Por supuesto! Contamos con opciones para personas con alergias. ¿Hay algo en particular que debamos saber? 🥗",
  },
  {
    intent: "preguntar_historia",
    response:
      "Nuestro restaurante fue fundado en 2010 con la misión de ofrecer la mejor experiencia de sushi en la ciudad. ¡Te invitamos a conocer nuestra historia y disfrutar de nuestros platos! 📖",
  },
  {
    intent: "preguntar_historia",
    response:
      "Desde 2010, hemos estado dedicados a ofrecerte la mejor experiencia de sushi. ¡Ven y descubrí nuestra historia! 🍣",
  },
  {
    intent: "preguntar_chef",
    response:
      "Nuestro chef cuenta con más de 15 años de experiencia en la cocina japonesa y es famoso por sus deliciosos rolls especiales. 🍣 ¡Te van a encantar sus creaciones!",
  },
  {
    intent: "preguntar_chef",
    response:
      "¡Te va a encantar! Nuestro chef tiene más de 15 años de experiencia en la cocina japonesa y es conocido por sus increíbles rolls especiales. 🍣 ¡No te los podés perder!",
  },
  {
    intent: "preguntar_pago",
    response:
      "Aceptamos efectivo, tarjetas de crédito y débito, así como pagos móviles. 💳 ¡Elegí el método que prefieras para tu comodidad!",
  },
  {
    intent: "preguntar_pago",
    response:
      "Podés pagar en efectivo, con tarjeta de crédito o débito, o incluso con pagos móviles. ¡Lo que te resulte más fácil! 😊",
  },
  {
    intent: "preguntar_recomendaciones",
    response:
      "Te recomiendo probar nuestro rollo de atún picante, es uno de los favoritos de nuestros clientes. 🌶️ ¡Una explosión de sabor que no te podés perder! También, el rollo de salmón es increíble.",
  },
  {
    intent: "preguntar_recomendaciones",
    response:
      "Si buscás algo especial, no te podés perder nuestro sushi de langosta. 🦞 ¡Es un verdadero manjar!",
  },
  {
    intent: "preguntar_eventos",
    response:
      "Sí, organizamos eventos especiales y noches temáticas. 🎊 ¡Estate atento a nuestras redes sociales para no perderte ninguna novedad!",
  },
  {
    intent: "preguntar_eventos",
    response:
      "¡Así es! Regularmente tenemos eventos y noches temáticas. 🎉 ¡Seguinos en redes sociales para estar al tanto de todo!",
  },
  {
    intent: "preguntar_catering",
    response:
      "Ofrecemos un servicio de catering para eventos. 🎉 ¿Te gustaría saber más sobre nuestras opciones y cómo podemos hacer tu evento especial?",
  },
  {
    intent: "preguntar_catering",
    response:
      "¡Claro! Tenemos opciones de catering para todo tipo de eventos. 🎊 ¿Querés que te envíe más información?",
  },
];

export default answers;
