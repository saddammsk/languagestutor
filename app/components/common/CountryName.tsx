import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const CountryName: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const t = useTranslations("countries");

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data.success) {
          setCountryCode(data.country_code);
        }
      } catch (err) {
        console.error("Error fetching country data:", err);
      }
    };

    fetchCountry();
  }, []);

  return (
    <div>
      {countryCode && (
        <div className="flex items-center text-sm gap-1.5">
          <img
            src={`https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`}
            alt={`${countryCode} flag`}
            width={24}
            height={18}
            className="inline-block"
          />
          <span className="text-xs lg:flex hidden font-geist">{t(countryCode)}</span>
        </div>
      )}
    </div>
  );
};

export default CountryName;
