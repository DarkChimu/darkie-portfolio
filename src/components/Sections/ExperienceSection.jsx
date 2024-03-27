import Experience from "@/components/Experience";

const ExperienceSection = () => {
  return (
    <section className="w-full" id="experience">
      <header className="font-bold text-2xl text-amber-300/95 mb-6 flex items-center gap-3">
        <h2 data-aos="zoom-in-right">Experience</h2>
        <div className="i-fa-pro:briefcase text-3xl"></div>
      </header>

      <Experience
        JobName="Desarrollador FrontEnd en Unow Solutions."
        startDate="Mar 2022"
        endDate="Dic 2023"
        description="Desarrollamos y desplegamos exitosos proyectos para nuestros clientes."
        responsabilites={[
          "Definir estructura base de proyectos (Frontend).",
          "Analizar y estimar el desarrollo de proyecto evaluando el Diseño creado en Figma.",
          "Desarrollar un Sistema de Diseño y UI Kit en Vanilla Javascript y StoryBookJS.",
          "Comunicación constante con el equipo de QA y usuarios recibiendo su feedback para definir futuras características.",
          "Estandarizado de componentes basado en nuestros Sistemas de Referencia (Bootstrap, Material UI, Tailwind, etc).",
          "Desarrollo de un Newsfeed & Flowers Delivery Mobile Tool",
          "Participación en el desarrollo de un Backoffice (ERP).",
          "Desarrollo de un e-Learning Platform.",
          "Integración de pasarelas de pago como ApplePay y Gpay.",
          "Integración de Ads Monetization con Appodeal.",
          "Code review y deploy con GitLab CI/CD.",
        ]}
      />

      <Experience
        JobName="Desarrollador FullStack en Giving Agency."
        startDate="Oct 2020"
        endDate="Nov 2021"
        description="Giving Agency es una empresa dedicada al fundraising que provee
        herramientas para ONG's y donantes, trabajando en
        conjunto con el equipo Afrus Impact Technologies."
        responsabilites={[
          "Backoffice desarrollado en NextJS + ExpressJS.",
          "Desarrollo de logs del sistema.",
          "Implementación de pasarela de pagos a nivel de frontend tales como Paypal, Stripe, Bakery, Pagar.me, Getnet, UNICEF Colombia.",
          "Desarrollo de sistema de exportación de datos a excel y csv.",
          "Sistema de Geolocalización y Charts implementado con D3-Geo.",
          "Sistema de Scoring que puntúa a los usuarios basado en eventos.",
          "Envío de correos automatizado implementado con Mailtrap.",
          "Integración de Servicios AWS, S3 y Firebase.",
          "Establecer el entorno de desarrollo compatible con Docker.",
        ]}
      />

      <Experience
        JobName="Desarrollador FullStack Freelance en Fiverr."
        startDate="Feb 2017"
        endDate="Oct 2020"
        description="Como freelance he desarrollado exitosos proyectos para mis clientes."
        responsabilites={[
          "Definir estructura base de proyectos (Frontend y Backend).",
          "Analizar y estimar el desarrollo de proyecto evaluando el Diseño creado en formatos como Figma, Adobe XD, Sketch, PSD, Illustration, JPG, PNG.",
          "Desarrollo Frontend en HTML / CSS / SASS / JQuery / React y Vue.",
          "Desarrollo de Aplicaciones Móviles React Native e Ionic.",
          "Desarrollo Backend en Node / Express / NestJS.",
          "Modelado de Bases de Datos relacionales SQL y Colecciones NoSQL con tecnologías como Postgres y MongoDB.",
          "Integración de contenedores Docker y despliegue en VPS Services / Cloudflare / Firebase Hosting.",
        ]}
      />

      <Experience
        JobName="Coach de Equipo"
        startDate="Feb 2015"
        endDate="Oct 2017"
        responsabilites={[
          "Instrucción presencial y online para la mesa de excelencia académica en la Universidad Nacional Experimental Rómulo Gallegos.",
        ]}
      />
    </section>
  );
};

export default ExperienceSection;
