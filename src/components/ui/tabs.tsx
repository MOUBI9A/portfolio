import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative flex w-full h-14 items-center justify-center rounded-xl bg-portfolio-card/30 backdrop-blur-sm p-2",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex w-full items-center justify-center relative px-4 py-2.5 text-sm font-medium transition-all duration-300",
      "rounded-lg text-portfolio-text hover:text-portfolio-lightest",
      "data-[state=active]:text-white data-[state=active]:shadow-lg",
      "before:absolute before:inset-0 before:rounded-lg before:transition-all before:duration-300",
      "before:opacity-0 hover:before:opacity-100 before:bg-portfolio-secondary/10",
      "data-[state=active]:before:bg-portfolio-secondary data-[state=active]:before:opacity-100",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-secondary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "relative z-10",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
