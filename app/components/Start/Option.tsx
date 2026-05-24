import { nunito } from "@/app/fonts";

export interface IOptionProps {
  level: "a1" | "a2" | "b1" | "b2" | "c1" | "c2";
  value:
    | "basic"
    | "beginner"
    | "intermediate"
    | "upper-intermediate"
    | "advanced"
    | "native";
  id: number;
}

export const Option = ({ level, value }: IOptionProps) => {
  return (
    <div className="w-full transition-all p-3 hover:backdrop-brightness-95">
      <p
        className={`capitalize ${nunito.className} text-sm text-gray-900 font-medium`}
      >
        {level} - {value}
      </p>
    </div>
  );
};
