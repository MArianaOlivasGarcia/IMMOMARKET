export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'immomarket',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500" },

      { rel: "stylesheet", href: "/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/fonts/icomoon/style.css" },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/css/jquery-ui.css" },
      { rel: "stylesheet", href: "/css/bootstrap-datepicker.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/fonts/flaticon/font/flaticon.css" },
      { rel: "stylesheet", href: "/css/fl-bigmug-line.css" },
      { rel: "stylesheet", href: "/css/aos.css" },
      { rel: "stylesheet", href: "/css/style.css"}
    ],
    script: [
      { src: "https://code.jQuery.com/jquery-3.3.1.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/stellar-base/0.13.0/stellar-base.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" },
      { src: "https://kit.fontawesome.com/c420ff123f.js", crossOrigin: "anonymous" },
      // { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA3mcj07-7u_nSPUosA0IuwIU3WPnP0D6I&libraries=places", async: true},

      { src: "/js/jquery-migrate-3.0.1.min.js" },
      { src: "/js/jquery-ui.js" },

      { src: "/js/jquery.countdown.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js" },
      { src: "/js/bootstrap-datepicker.min.js" },
      { src:"/js/aos.js" },
      { src:"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" },

      { src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",  async: true, defer: true },
      { src: "/js/main.js" },
      { src: "/js/lightbox-plus-jquery.js" },
      { src: "/js/mapper.js" },
    ],
    bodyAttrs: {
      // class: 'offcanvas-menu',
      ['data-spy']: "scroll" ,
      ['data-offset']: "80"
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/VueAgile', mode: 'client' },
    { src: '~/plugins/VueCookies' },
    { src: '~/plugins/VueGeolocation' },
    { src: '~/plugins/VueGoogleMaps', ssr: false},
    { src: '~/plugins/VueSweetalert2' },
    { src: '~/plugins/VueTelInput' },
    { src: '~/plugins/VueMoney' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/layout',
      '~/components/carousel',
      '~/components/properties',
      '~/components/search',
      '~/components/developments',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-route-meta',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    vueI18n: {
      fallbackLocale: 'es',
      messages: {
        en: {
          "components": {
              "home_carousel": {
                  "details": "Details"
              },
              "best_developments": {
                  "title": "FEATURED DEVELOPMENTS"
              },
              "best_properties": {
                  "title": "Recent Properties",
                  "link": "All properties"
              },
              "property_card": {
                  "link": "See more",
                  "area": "Terrain",
                  "bedrooms": "Bedroom(s)",
                  "bathrooms": "Bathroom(s)",
                  "construction": "Construction",
                  "since": "From ",
                  "legend": "*Prices subject to change without notice"
              },
              "development_card": {
                  "link": "See more",
                  "area": "Terrain",
                  "bedrooms": "Bedroom(s)",
                  "bathrooms": "Bathroom(s)",
                  "construction": "Construction",
                  "since": "From ",
                  "legend": "*Prices subject to change without notice"
              },
              "places_section": {
                  "title": "Destinations"
              },
              "place_card": {
                  "link": "See Properties"
              },
              "news_card": {
                  "link": "See more"
              },
              "agent_card": {
                  "link": "VIEW AGENT"
              },
              "contact_form": {
                  "name_input_placeholder": "Name",
                  "name_input_message": "Please enter at least 4 characters",
                  "email_input_placeholder": "Email",
                  "email_input_message": "Enter a correct email",
                  "phone_input_label": "Phone",
                  "phone_input_placeholder": "Enter your Phone",
                  "phone_input_message": "Please enter at least 8 chars of subject",
                  "message_input_placeholder": "Message",
                  "message_input_message": "Please write something for us",
                  "button": "Send"
              },
              "error_section": {
                  "404": {
                      "title": "Oops! Page not found",
                      "description": "Excuse me. The page you are looking for does not exist."
                  },
                  "204": {
                      "title": "Oops! No results were found for your search",
                      "description": "Try other parameters."
                  },
                  "302": {
                      "title": "Oops! Property not found",
                      "description": "Excuse me. The property you are looking for does not exist."
                  },
                  "306": {
                      "title": "Oops! Development not found",
                      "description": "Excuse me. The developmnent you are looking for does not exist."
                  }
              },
              "detail_carousel": {
                  "lightbox": "Enlarge Photos"
              }
          },
          "layout": {
              "nav": {
                  "home": "Home",
                  "properties": "Properties",
                  "developments": "Developments",
                  "agents": "Agents",
                  "about": {
                      "title": "About Us",
                      "privacy": "Privacy notice",
                      "consultacy": "Consultacy",
                      "offices": "Offices"
                  },
                  "contact": "Contact",
                  "go_to_immo": "ACCESS IMMO CRM 360"
              },
              "header": {
                  "search_form": {
                      "keyword_input": "Name, City",
                      "operation_input": "OPERATION",
                      "property_type_input": "PROPERTY TYPE",
                      "development_type_input": "DEVELOPMENT TYPE",
                      "min_price_input": "PRICE MIN",
                      "min_price_select": "Price min",
                      "max_price_input": "PRICE MAX",
                      "max_price_select": "Price max",
                      "municipality_input": "MUNICIPALITY",
                      "location_input": "LOCATION",
                      "option_select": "Select",
                      "option_sold": "Sold",
                      "option_rent": "Rent",
                      "option_vacation": "Vacation Rental",
                      "all_cities_option": "All cities",
                      "type_search": "SEARCH DEVELOPMENTS",
                      "button": "SEARCH",
                      "location_autocomplete":"AUTOCOMPLETE",
                      "location_autocomplete_input": "City, State, Street"
                  }
              },
              "footer": {
                  "company_phone": "Phone",
                  "company_email": "Email",
                  "company_address": "Address",
                  "contact_title": "Contact",
                  "menu_title": "Menu",
                  "social_links": "Follow Us",
                  "copyright": "All rights reserved."
              },
      
              "banner": {
                  "home_link": "Home",
                  "properties_link": "Properties",
                  "agents_link": "Agents"
              }
          },
          "pages": {
              "home": {
                  "title_properties": "Main Properties"
              },
              "contact": {
                  "title": "Contact Us",
                  "contact_info": "Contact information",
                  "company_phone": "Phone",
                  "company_address": "Address",
                  "company_email": "Email",
                  "social_title": "Follow us on our networks"
              },
              "about": {
                  "company": {
                      "title": "OUR COMPANY",
                      "description": "Presentation of the company where the name is usually placed, a short history of the evolution of the company, mention the work team, talk about achievements and strengths, which differentiate your company from the others."
                  },
                  "slogan": "SLOGAN. phrase that highlights what a company does, emphasizes a value or characteristic.",
                  "mision": {
                      "title": "MISION",
                      "description": "The mission of a company includes the objectives and essential principles for the work of the organization. The business mission is declared with the formulation of a sentence; a single phrase in which the most important concept of a business is communicated."
                  },
                  "vision": {
                      "title": "VISION",
                      "description": "A company's vision describes the goal it hopes to achieve in the future. the definition of the vision should be one of the central roles of the leader, and of the executive team of the company."
                  },
                  "values": {
                      "title": "VALUES",
                      "example_one": {
                          "description": "Originality. The pursuit of one's own path, even when that involves risk and greater demands."
                      },
                      "example_two": {
                          "description": "Solidarity. Lending a hand to the needy, putting the collective welfare before profit, knowing how to curb business competitiveness inside and outside the organization."
                      }
      
                  }
              },
              "properties": {
                  "title": "Properties"
              },
              "property_detail": {
                  "title": "Property Detail",
                  "features": "Features",
                  "feature_operation": "Operation",
                  "feature_type": "Property type",
                  "feature_address": "Address",
                  "feature_area_cons": "Construction area",
                  "feature_area_lot": "Land area",
                  "feature_bedrooms": "Bedrooms",
                  "feature_bathrooms": "Bathrooms",
                  "feature_half_bathrooms": "Half baths",
                  "feature_parking": "Parking",
                  "documents": "Documents",
                  "share_prop": "Share",
                  "share_whats_message_public": "Hello. Look at this property, it might interest you!",
                  "share_whats_message_agent": "Good morning, I'm interested in this property",
                  "description_prop": "Description",
                  "amenities_prop": "Amenities",
                  "amenities_interior": "Interiors",
                  "amenities_exterior": "Exterior",
                  "amenities_maintenance": "Maintenance",
                  "amenities_development": "Development",
                  "services_prop": "Services",
                  "agent_information": "Agent Information",
                  "agent_cellphone": "Mobile",
                  "agent_phone": "Phone",
                  "agent_email": "Email",
                  "references": "Reference",
                  "share_title": "DOWNLOAD THE CONTENT OF THIS PROPERTY",
                  "contact_us": "CONTACT US",
                  "map_title": "Location"
      
              },
              "developments": {
                  "title": "Developments"
              },
              "development_detail": {
                  "features": "Features",
                  "feature_presale": "FOR PRESALE",
                  "feature_type": "Property type",
                  "feature_address": "Address",
                  "feature_area_cons": "Construction area",
                  "feature_area_lot": "Land area",
                  "feature_bedrooms": "Bedrooms",
                  "feature_bathrooms": "Bathrooms",
                  "feature_parking": "Parking",
                  "feature_months_market": "Months on market",
                  "feature_units_aviable": "Available units",
                  "documents": "Documents",
                  "share_prop": "Share",
                  "share_whats_message_public": "Hello. Look at this development, it might interest you!",
                  "share_whats_message_agent": "Good morning, I'm interested in this development",
                  "description_prop": "Description",
                  "amenities_prop": "Amenities",
                  "services_prop": "Services",
                  "agent_information": "Agent Information",
                  "agent_cellphone": "Mobile",
                  "agent_phone": "Phone",
                  "agent_email": "Email",
                  "maintenance_includes": "Maintenance",
                  "price_from": "From",
                  "contact_us": "CONTACT US",
                  "units_aviable": "Units Aviable",
                  "map_title": "Location",
                  "mapper_title": "Blueprints",
                  "masterplan_title": "Get to know our MASTER PLAN",
                  "masterplan_section_button": "Discover the development sections",
                  "mapper_section_name": "Section",
                  "mapper_return_button": "See development detail",
                  "mapper_status_available": "Available",
                  "mapper_status_reserved": "Reserved",
                  "mapper_status_unavailable": "Not Available",
                  "mapper_alert_error": "Unit Not Available",
                  "mapper_alert_contactform_title": "Request information about this unit",
                  "mapper_alert_form_term": "Term",
                  "mapper_alert_form_monthlypayment": "Monthly Payment",
                  "mapper_alert_form_deposit": "Deposit",
                  "mapper_alert_form_availability": "Availability",
                  "mapper_alert_form_cost": "Cost",
                  "mapper_alert_form_area": "Area",
                  "share_title": "DOWNLOAD THE CONTENT OF THIS DEVELOPMENT"
              },
              "agent_detail": {
                  "title": "Our Agents",
                  "our_properties": "My Properties"
              }
          },
          "routes": {
              "home": {
                  "breadcrumb": "Start"
              },
              "about": {
                  "page_title": "About Us",
                  "breadcrumb": "About us"
              },
              "privacy": {
                  "page_title": "PRIVACY NOTICE",
                  "breadcrumb": "Privacy Notice"
              },
              "properties": {
                  "page_title": "Properties",
                  "breadcrumb": "Properties"
              },
              "property": {
                  "breadcrumb": "Features"
              },
              "property_not_found": {
                  "breadcrumb": "Property Not Found",
                  "page_title": "Property Not Found"
              },
              "developments": {
                  "page_title": "Developments",
                  "breadcrumb": "Developments"
              },
              "development": {
                  "breadcrumb": "Features"
              },
              "development_not_found": {
                  "breadcrumb": "Development Not Found",
                  "page_title": "Development Not Found"
              },
              "search_results": {
                  "page_title": "Properties results",
                  "breadcrumb": "Result"
              },
              "search_results_devs": {
                  "page_title": "Developments results",
                  "breadcrumb": "Dev Result"
              },
              "agents": {
                  "page_title": "Agents",
                  "breadcrumb": "Agents"
              },
              "agent": {
                  "breadcrumb": "Agent profile"
              },
              "contact": {
                  "page_title": "CONTACT US",
                  "breadcrumb": "Contact"
              },
              "error": {
                  "breadcrumb": "Page not found",
                  "page_title": "Error"
              }
          }
      },
        es: {
          "components": {
              "home_carousel": {
                  "details": "Detalles"
              },
              "best_developments": {
                  "title": "DESARROLLOS DESTACADOS"
              },
              "best_properties": {
                  "title": "Propiedades Recientes",
                  "link": "Todas las propiedades"
              },
              "property_card": {
                  "link": "Ver más",
                  "area": "Terreno",
                  "bedrooms": "Recámara(s)",
                  "bathrooms": "Baño(s)",
                  "construction": "Construcción",
                  "since": "Desde",
                  "legend": "*Precios sujetos a cambios sin previo aviso"
              },
              "development_card": {
                  "link": "Ver más",
                  "area": "Terreno",
                  "bedrooms": "Recámara(s)",
                  "bathrooms": "Baño(s)",
                  "construction": "Construcción",
                  "since": "Desde",
                  "legend": "*Precios sujetos a cambios sin previo aviso"
              },
              "places_section": {
                  "title": "Destinos"
              },
              "place_card": {
                  "link": "Ver propiedades"
              },
              "news_card": {
                  "link": "Ver más"
              },
              "agent_card": {
                  "link": "VER AGENTE"
              },
              "contact_form": {
                  "name_input_placeholder": "Nombre",
                  "name_input_message": "Ingrese al menos 4 caracteres",
                  "email_input_placeholder": "Correo electrónico",
                  "email_input_message": "Introduce un correo electrónico correcto",
                  "phone_input_label": "Teléfono",
                  "phone_input_placeholder": "Ingresa tu Teléfono",
                  "phone_input_message": "Ingrese al menos 8 caracteres de asunto",
                  "message_input_placeholder": "Mensaje",
                  "message_input_message": "Por favor escribenos algo.",
                  "button": "Enviar"
              },
              "error_section": {
                  "404": {
                      "title": "Oops! Página no encontrada",
                      "description": "Disculpe. La página que está buscando no existe."
                  },
                  "204": {
                      "title": "Oops! No se encontraron resultados para tu búsqueda",
                      "description": "Intente con otros parámetros."
                  },
                  "302": {
                      "title": "Oops! Propiedad no encontrada",
                      "description": "Disculpe. La propiedad que está buscando no existe."
                  },
                  "306": {
                      "title": "Oops! Desarrollo no encontrado",
                      "description": "Disculpe. El desarrollo que está buscando no existe."
                  }
              },
              "detail_carousel": {
                  "lightbox": "Ampliar Fotos"
              }
          },
          "layout": {
              "nav": {
                  "home": "Inicio",
                  "properties": "Propiedades",
                  "developments": "Desarrollos",
                  "agents": "Agentes",
                  "about": {
                      "title": "Nosotros",
                      "privacy": "Aviso de privacidad",
                      "consultacy": "Consultoría",
                      "offices": "Oficinas"
                  },
                  "contact": "Contacto",
                  "broker_cr": "SOY BROKER CR",
                  "go_to_immo": "ACCEDER A IMMO CRM 360"
              },
              "header": {
                  "search_form": {
                      "keyword_input": "Nombre, Ciudad",
                      "operation_input": "OPERACIÓN",
                      "property_type_input": "TIPO DE PROPIEDAD",
                      "development_type_input": "TIPO DE DESARROLLO",
                      "min_price_input": "PRECIO MIN",
                      "min_price_select": "Precio min",
                      "max_price_input": "PRECIO MAX",
                      "max_price_select": "Precio max",
                      "municipality_input": "MUNICIPIO",
                      "location_input": "UBICACIÓN",
                      "option_select": "Selecciona",
                      "option_sold": "Venta",
                      "option_rent": "Renta",
                      "option_vacation": "Renta Vacacional ",
                      "all_cities_option": "Todas las ciudades",
                      "type_search": "BUSCAR DESARROLLOS",
                      "button": "BUSCAR",
                      "location_autocomplete":"AUTOCOMPLETADO",
                      "location_autocomplete_input": "Ciudad, Estado, Calle"
                  }
              },
              "footer": {
                  "company_phone": "Teléfono",
                  "company_email": "Correo Electrónico",
                  "company_address": "Dirección",
                  "contact_title": "Contacto",
                  "menu_title": "Menú",
                  "social_links": "Síguenos",
                  "copyright": "Todos los derechos reservados."
              },
              "banner": {
                  "home_link": "Inicio",
                  "properties_link": "Propiedades",
                  "agents_link": "Agentes"
              }
          },
          "pages": {
              "home": {
                  "title_properties": "Principales propiedades"
              },
              "contact": {
                  "title": "Contáctanos",
                  "contact_info": "Información de contacto",
                  "company_phone": "Teléfono",
                  "company_address": "Dirección",
                  "company_email": "Correo Electrónico",
                  "social_title": "Síguenos en nuestras redes"
              },
              "about": {
                  "company": {
                      "title": "NUESTRA EMPRESA",
                      "description": "Presentación de la empresa en donde generalmente se coloca el nombre, una pequeña historia de la evolución de la empresa (resumida), mencionar al equipo de trabajo, se habala de logros y puntos fuertes, que diferencian a tu empresa de las demas."
                  },
                  "slogan": "ESLOGAN. frase que destaca lo que hace una empresa, hace hincapié en un valor o característica.",
                  "mision": {
                      "title": "MISIÓN",
                      "description": "La misión de una empresa comprende los objetivos y principios esenciales para el trabajo de la organización. La misión empresarial se declara con la formulación de una sentencia; una frase única en la que se comunica el concepto más importante de un negocio."
                  },
                  "vision": {
                      "title": "VISIÓN",
                      "description": "La visión de una empresa describe el objetivo que espera lograr en un futuro. la definición de la visión debe ser uno de los papeles centrales del líder, y del equipo ejecutivo de la empresa"
                  },
                  "values": {
                      "title": "VALORES",
                      "example_one": {
                          "description": "Originalidad. La persecución del propio camino, incluso cuando eso suponga riesgo y mayores exigencias."
                      },
                      "example_two": {
                          "description": "Solidaridad. Tender una mano al necesitado, anteponer el bienestar colectivo al lucro, saber poner coto a la competitividad empresarial dentro y fuera de la organización."
                      }
      
                  }
              },
              "properties": {
                  "title": "Propiedades"
              },
              "property_detail": {
                  "title": "Detalle de Propiedad",
                  "features": "Características",
                  "feature_operation": "Operación",
                  "feature_type": "Tipo de propiedad",
                  "feature_address": "Dirección",
                  "feature_area_cons": "Área de construcción",
                  "feature_area_lot": "Área de terreno",
                  "feature_bedrooms": "Recámaras",
                  "feature_bathrooms": "Baños",
                  "feature_half_bathrooms": "Medios Baños",
                  "feature_parking": "Estacionamientos",
                  "documents": "Documentos",
                  "share_prop": "Comparte",
                  "share_whats_message_public": "Hola. Mira esta propiedad, te podría interesar!",
                  "share_whats_message_agent": "Buen día estoy interesado en esta propiedad",
                  "description_prop": "Descripción",
                  "amenities_prop": "Amenidades",
                  "amenities_interior": "Interiores",
                  "amenities_exterior": "Exteriores",
                  "amenities_maintenance": "Mantenimiento",
                  "amenities_development": "Desarrollo",
                  "services_prop": "Servicios",
                  "agent_information": "Información del Agente",
                  "agent_cellphone": "Celular",
                  "agent_phone": "Teléfono",
                  "agent_email": "Correo Electrónico",
                  "references": "Referencia",
                  "share_title": "DESCARGA EL CONTENIDO DE ESTA PROPIEDAD",
                  "contact_us": "CONTÁCTANOS",
                  "map_title": "Ubicación"
      
              },
              "developments": {
                  "title": "Desarrollos"
              },
              "development_detail": {
                  "features": "Características",
                  "feature_presale": "EN PREVENTA",
                  "feature_type": "Tipo de propiedad",
                  "feature_address": "Dirección",
                  "feature_area_cons": "Área de construcción",
                  "feature_area_lot": "Área de terreno",
                  "feature_bedrooms": "Recámaras",
                  "feature_bathrooms": "Baños",
                  "feature_parking": "Estacionamientos",
                  "feature_months_market": "Meses en mercado",
                  "feature_units_aviable": "Unidades disponibles",
                  "documents": "Documentos",
                  "share_prop": "Comparte",
                  "share_whats_message_public": "Hola. Mira este desarrollo, te podría interesar!",
                  "share_whats_message": "Buen día estoy interesado en este desarrollo",
                  "description_prop": "Descripción",
                  "amenities_prop": "Amenidades",
                  "services_prop": "Servicios",
                  "agent_information": "Información del Agente",
                  "agent_cellphone": "Celular",
                  "agent_phone": "Teléfono",
                  "agent_email": "Correo Elelctrónico",
                  "maintenance_includes": "Mantenimiento",
                  "price_from": "Desde",
                  "contact_us": "CONTÁCTANOS",
                  "units_aviable": "Unidades Disponibles",
                  "map_title": "Ubicación",
                  "mapper_title": "Planos",
                  "masterplan_title": "Conoce nuestro MASTER PLAN",
                  "masterplan_section_button": "Descubre las secciones del desarrollo",
                  "mapper_section_name": "Sección",
                  "mapper_return_button": "Ver detalle del desarrollo",
                  "mapper_status_available": "Disponible",
                  "mapper_status_reserved": "Reservado",
                  "mapper_status_unavailable": "No Disponible",
                  "mapper_alert_error": "Unidad no disponible",
                  "mapper_alert_contactform_title": "Solicita información de esta unidad",
                  "mapper_alert_form_term": "Plazo",
                  "mapper_alert_form_monthlypayment": "Mensualidad",
                  "mapper_alert_form_deposit": "Enganche",
                  "mapper_alert_form_availability": "Disponibilidad",
                  "mapper_alert_form_cost": "Costo",
                  "mapper_alert_form_area": "Área",
                  "share_title": "DESCARGA EL CONTENIDO DE ESTE DESARROLLO"
      
              },
              "agent_detail": {
                  "title": "Nuestros Agentes",
                  "our_properties": "Mis Propiedades"
              }
          },
          "routes": {
              "home": {
                  "breadcrumb": "Inicio"
              },
              "about": {
                  "page_title": "Acerca de Nosotros",
                  "breadcrumb": "Nosotros"
              },
              "privacy": {
                  "page_title": "Aviso de Privacidad",
                  "breadcrumb": "Aviso de Privacidad"
              },
              "properties": {
                  "page_title": "Propiedades",
                  "breadcrumb": "Propiedades"
              },
              "property": {
                  "breadcrumb": "Características"
              },
              "property_not_found": {
                  "breadcrumb": "Propiedad no encontrada",
                  "page_title": "Propiedad no encontrada"
              },
              "developments": {
                  "page_title": "Desarrollos",
                  "breadcrumb": "Desarrollos"
              },
              "development": {
                  "breadcrumb": "Características"
              },
              "development_not_found": {
                  "breadcrumb": "Desarrollo no encontrado",
                  "page_title": "Desarrollo no encontrado"
              },
              "search_results": {
                  "page_title": "Resultados de búsqueda",
                  "breadcrumb": "Resultado"
              },
              "search_results_devs": {
                  "page_title": "Busqueda de desarrollos",
                  "breadcrumb": "Resultado"
              },
              "agents": {
                  "page_title": "Agentes",
                  "breadcrumb": "Agentes"
              },
              "agent": {
                  "breadcrumb": "Perfil de agente"
              },
              "contact": {
                  "page_title": "CONTÁCTANOS",
                  "breadcrumb": "Contacto"
              },
              "error": {
                  "breadcrumb": "Página no encontrada",
                  "page_title": "Error"
              }
          }
      
      }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
