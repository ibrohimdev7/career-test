import React from "react";
import { Globe, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const learningCenters = [
  {
    id: 1,
    name: "Code Academy",
    description: "Learn coding and technology skills",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
    phone: "(123) 456-7890",
    website: "codeacademy.com",
  },
  {
    id: 2,
    name: "Design Institute",
    description: "Master UI/UX and graphic design",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80&w=400",
    phone: "(123) 456-7891",
    website: "designinstitute.com",
  },
];

const LearningCenters = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {learningCenters.map((center) => (
        <div
          key={center.id}
          className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-[1.02]"
        >
          <Image
            src={center.image}
            alt={center.name}
            className="h-40 object-cover"
            width={400}
            height={80}
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-900">{center.name}</h3>
            <p className="mt-1 text-gray-600">{center.description}</p>
            <div className="mt-4 items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>{center.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <Link
                  href={`https://${center.website}`}
                  className="text-blue-600 hover:underline"
                >
                  {center.website}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearningCenters;
