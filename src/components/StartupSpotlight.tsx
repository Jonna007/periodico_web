import React from 'react';
import { TrendingUp, Users, DollarSign, MapPin, ArrowRight } from 'lucide-react';

interface Startup {
  id: number;
  name: string;
  description: string;
  funding: string;
  employees: string;
  location: string;
  category: string;
  logo: string;
  growth: string;
}

const startups: Startup[] = [
  {
    id: 1,
    name: "EcuaPay",
    description: "Fintech ecuatoriana que revoluciona los pagos digitales con tecnología blockchain y billeteras virtuales para el mercado latinoamericano.",
    funding: "$8.5M Serie A",
    employees: "45+",
    location: "Quito, Ecuador",
    category: "Fintech",
    logo: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+280%"
  },
  {
    id: 2,
    name: "AgroTech Solutions",
    description: "Plataforma de agricultura de precisión que usa drones, sensores IoT e inteligencia artificial para optimizar cultivos ecuatorianos.",
    funding: "$5.2M Seed",
    employees: "32+",
    location: "Guayaquil, Ecuador",
    category: "AgTech",
    logo: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+340%"
  },
  {
    id: 3,
    name: "EduVirtual Ecuador",
    description: "Plataforma educativa que conecta estudiantes rurales con profesores especializados mediante realidad virtual y gamificación.",
    funding: "$3.8M Pre-Serie A",
    employees: "28+",
    location: "Cuenca, Ecuador",
    category: "EdTech",
    logo: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+220%"
  },
  {
    id: 4,
    name: "EcoLogistics",
    description: "Startup de logística verde que optimiza rutas de entrega usando IA y vehículos eléctricos para reducir la huella de carbono.",
    funding: "$4.1M Serie A",
    employees: "38+",
    location: "Quito, Ecuador",
    category: "GreenTech",
    logo: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+195%"
  },
  {
    id: 5,
    name: "HealthConnect",
    description: "Telemedicina especializada en comunidades indígenas ecuatorianas con traducción automática a lenguas nativas y diagnóstico remoto.",
    funding: "$6.3M Serie A",
    employees: "41+",
    location: "Quito, Ecuador",
    category: "HealthTech",
    logo: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+260%"
  },
  {
    id: 6,
    name: "TurismoVR",
    description: "Experiencias de turismo virtual del Ecuador usando realidad aumentada y 360°, promocionando destinos ecuatorianos globalmente.",
    funding: "$2.9M Seed",
    employees: "24+",
    location: "Baños, Ecuador",
    category: "Tourism Tech",
    logo: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=300",
    growth: "+180%"
  }
];

export default function StartupSpotlight() {
  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Startups Ecuatorianas en Ascenso</h2>
          <p className="text-xl text-slate-600">Las empresas emergentes que están transformando el ecosistema tecnológico nacional</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <div
              key={startup.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-200 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                    {startup.name}
                  </h3>
                  <span className="text-sm text-purple-600 font-semibold">{startup.category}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-6 line-clamp-3">
                {startup.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-semibold text-green-800">Financiación</span>
                  </div>
                  <p className="text-green-700 font-bold">{startup.funding}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-800">Crecimiento</span>
                  </div>
                  <p className="text-blue-700 font-bold">{startup.growth}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{startup.employees} empleados</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{startup.location}</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Ver perfil completo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}