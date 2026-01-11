import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type Props = {
  links: {
    title: string;
    href: string;
  }[];
  pageTitle: string;
};

const Breadcrumbs = ({ links, pageTitle }: Props) => {
  return (
    <Breadcrumb className="mb-3">
      <BreadcrumbList>
        {links.map((item) => (
          <BreadcrumbItem key={item.href}>
            <BreadcrumbLink asChild>
              <Link href={item.href}>{item.title}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
