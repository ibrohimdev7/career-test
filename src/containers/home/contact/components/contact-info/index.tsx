import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mb-8 aspect-video w-full rounded-2xl bg-gray-100">
        {/* Placeholder for map or image */}
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-200">
          <MapPin className="h-16 w-16 text-gray-400" />
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Visit Us</h3>
          <p className="text-gray-600">
            58 Middle Point Rd
            <br />
            San Francisco, 94124
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>(97) 777 - 77 - 77</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>(77) 555 - 55 - 55</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="h-5 w-5 text-blue-600" />
              <Link
                href="mailto:contact@company.com"
                className="transition-colors hover:text-blue-600"
              >
                contact@company.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
