"use client";
import { FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { ROUTES } from "../../../constants/routes";

import style from "./HeaderSearch.module.scss";

type Inputs = {
  search: string;
};

const Search: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { search: "" } });

  const isMatch = ROUTES.SEARCH === pathname;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const search = data.search.trim();
    if (!search) return;
    router.push(`${ROUTES.SEARCH}?query=${search}`, { scroll: false });
  };

  useEffect(() => {
    if (isMatch) return;
    reset();
  }, [location, isMatch]);

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={style.input}>
        <input
          placeholder="что найти?"
          {...register("search", {
            // required: "Поле обязательно для заполнения!",
            // maxLength: {
            //   value: 100,
            //   message: "Максимум 100 символов",
            // },
          })}
        />
        <div onClick={() => reset()}>
          <Image src="/exitInput.svg" alt="" width={15} height={15} priority />
        </div>
        <span />
        <button type="submit">
          <Image src="/search.svg" alt="" width={20} height={20} priority />
        </button>
      </div>

      {errors.search && <span>{errors.search.message}</span>}
    </form>
  );
};

export default Search;
