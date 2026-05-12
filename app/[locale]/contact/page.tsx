"use client";
import { Button } from "@headlessui/react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocale, useTranslations } from "next-intl";
import { useGlobalContext } from "@/app/context/GlobalContext";
import { Link } from "@/i18n/navigation";
import SubjectField from "@/app/components/SubjectField";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message?: string;
  privacyAccepted: boolean;
};

const contactCopy = {
  en: {
    title: "Get In Touch",
    intro:
      "Tell us what you would like to learn, and our team will help you choose the right language course or demo class.",
    sidebarTitle: "Reach out",
    sidebarText:
      "Get in touch with us for any questions, support, or learning inquiries. We are here to help.",
    pakistan: "PAK",
    uk: "UK",
    location: "Location",
    address: "Address: BD3 9DY, Bradford, 13 Thursby St.",
    mailUs: "Mail Us",
    success: "Demo booked successfully!",
    failed: "Failed to submit form",
    error: "Something went wrong.",
    validation: {
      name: "Your name is required",
      email: "Invalid email address",
      phone: "Whatsapp number required",
      country: "Country is required",
      subject: "Subject is required",
      privacy: "You must accept the privacy policy",
    },
  },
  ar: {
    title: "تواصل معنا",
    intro:
      "أخبرنا بما ترغب في تعلمه، وسيساعدك فريقنا على اختيار الدورة اللغوية أو الحصة التجريبية المناسبة.",
    sidebarTitle: "يسعدنا تواصلك",
    sidebarText:
      "تواصل معنا لأي أسئلة أو دعم أو استفسارات تعليمية. نحن هنا لمساعدتك.",
    pakistan: "باكستان",
    uk: "المملكة المتحدة",
    location: "الموقع",
    address: "العنوان: BD3 9DY، برادفورد، 13 شارع ثورسبي.",
    mailUs: "راسلنا",
    success: "تم حجز الحصة التجريبية بنجاح!",
    failed: "فشل إرسال النموذج",
    error: "حدث خطأ ما.",
    validation: {
      name: "الاسم مطلوب",
      email: "عنوان البريد الإلكتروني غير صالح",
      phone: "مطلوب رقم واتس اب",
      country: "البلد مطلوب",
      subject: "الموضوع مطلوب",
      privacy: "يجب الموافقة على سياسة الخصوصية",
    },
  },
};

const createFormSchema = (copy: (typeof contactCopy)["en"]) =>
  z.object({
    name: z.string().min(1, copy.validation.name),
    email: z.string().email(copy.validation.email),
    phone: z.string().min(5, copy.validation.phone),
    country: z.string().min(1, copy.validation.country),
    subject: z.string().min(1, copy.validation.subject),
    message: z.string().optional(),
    privacyAccepted: z.boolean().refine((val) => val, {
      message: copy.validation.privacy,
    }),
  });

export default function Contact() {
  const { setIsOpenForm } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const copy = locale === "ar" ? contactCopy.ar : contactCopy.en;

 
  const methods = useForm<FormValues>({
    resolver: zodResolver(createFormSchema(copy)),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
      privacyAccepted: false,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = methods;

  const close = () => {
    setIsOpenForm(false);
    reset();
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/bookdemo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || copy.success);
        close();
      } else {
        toast.error(result.error || copy.failed);
      }
    } catch {
      toast.error(copy.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-10 px-4">
      <div className="text-center mb-5 md:mb-10 max-w-2xl mx-auto">
        <h1 className="md:text-4xl text-3xl font-bold text-black1 pb-2 md:pb-4">
          {copy.title}
        </h1>
        <p className="text-gray-5 text-sm font-normal text-black1">
          {copy.intro}
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex md:flex-row flex-col rounded-2xl overflow-hidden shadow-lg bg-white">
        <div className="relative bg-black1 md:w-[300px] flex-shrink-0 p-5 md:p-8 flex flex-col overflow-hidden">
          <h2 className="text-white font-bold text-lg mb-3">{copy.sidebarTitle}</h2>
          <p className="text-white text-xs leading-relaxed mb-8">
            {copy.sidebarText}
          </p>

          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-gray5 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </div>
            <div className="text-white text-sm font-medium">
              <p className="pb-1">{copy.pakistan}</p>
            <a
            href="https://wa.me/923338875775"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            +923338875775
          </a>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-gray5 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </div>
            <div className="text-white text-sm font-medium">
              <p className="pb-1">{copy.uk}</p>
              <a href="tel:+447403195442">+44 740 319-5442</a>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-gray5 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="text-white text-sm font-medium">
              <p className="pb-1">{copy.location}</p>
              <Link href="/">{copy.address}</Link>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gray5 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div className="text-white text-sm font-medium">
              <p className="pb-1">{copy.mailUs}</p>
              <a href="mailto:info@languagestutor.org" className="[unicode-bidi:bidi-override] [direction:rtl] inline-block">
                gro.rotutsagaugnal@ofni
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 p-5 md:p-9 bg-white border border-solid border-black1 rounded-br-2xl rounded-bl-2xl md:rounded-bl-none  md:rounded-tr-2xl md:rounded-br-2xl">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
              id="demo-form"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="YourName"
                    className="text-sm  font-medium text-gray5"
                  >
                    {t("name")}
                  </label>
                  <input
                    {...register("name")}
                    id="YourName"
                    placeholder={t("name")}
                    className="border-b border-gray-200 focus:border-black1 outline-none py-2 text-sm text-black1 bg-transparent transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm  font-medium text-gray5"
                  >
                    {t("email")}
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder={t("email")}
                    className="border-b border-gray-200 focus:border-black1 outline-none py-2 text-sm text-black1 bg-transparent transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-sm  font-medium text-gray5"
                  >
                    {t("phone")}
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    placeholder={t("phone")}
                    className="border-b border-gray-200 focus:border-black1 outline-none py-2 text-sm text-black1 bg-transparent transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="country"
                    className="text-sm  font-medium text-gray5"
                  >
                    {t("country")}
                  </label>
                  <input
                    {...register("country")}
                    id="country"
                    placeholder={t("countries.US")}
                    className="border-b border-gray-200 focus:border-black1 outline-none py-2 text-sm text-black1 bg-transparent transition-colors"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              <SubjectField
                control={control}
                errors={errors}
                t={t}
              />

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-xs text-gray5 font-semibold"
                >
                  {t("message")}
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  placeholder={t("type_your_message_here")}
                  rows={3}
                  className="border-b  focus:border-black1 outline-none py-2 text-sm text-black1 bg-transparent resize-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <input
                    {...register("privacyAccepted")}
                    type="checkbox"
                    id="Privacy"
                    className="accent-black1"
                  />
                  <label
                    htmlFor="Privacy"
                    className="text-gray5 text-sm font-normal"
                  >
                    {t("privacy_policy")}
                  </label>
                </div>
                {errors.privacyAccepted && (
                  <p className="text-red-500 text-xs">
                    {errors.privacyAccepted.message}
                  </p>
                )}
              </div>
              <div>
                <Button
                  type="submit"
                  className="text-sm md:w-auto w-full md:justify-start justify-center inline-flex text-primary1 bg-primary border border-[#fff3] font-medium transition-all duration-200 py-2.5 px-5 rounded-lg"
                >
                  {!loading ? t("contact_btn") : t("please_wait")}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
}
