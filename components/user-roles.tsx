"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function UserRoles() {
  const roles = [
    {
      id: "teachers",
      icon: <School className="h-6 w-6" />,
      title: "For Teachers & Admins",
      features: [
        "Create tests manually or auto-generate",
        "Assign tests to classes or groups",
        "Schedule mock exams / reminders",
        "Track student performance",
        "Message parents directly",
        "Share notes and explanations",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "students",
      icon: <GraduationCap className="h-6 w-6" />,
      title: "For Students",
      features: [
        "Practice mode or exam mode",
        "View history & progress",
        "Create own tests for revision",
        "Unlock achievements (gamify learning)",
        "Doubt section (future phase)",
        "Personalized learning path",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "parents",
      icon: <Users className="h-6 w-6" />,
      title: "For Parents",
      features: [
        "See performance reports",
        "Download test papers & answers",
        "Help kids practice offline",
        "Option to print from dashboard",
        "Alerts/reminders for upcoming tests",
        "Track improvement over time",
      ],
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="roles" className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="font-heading text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Tailored for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Every User
            </span>
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            EduGenius provides specialized features for teachers, students, and parents
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="teachers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {roles.map((role) => (
                <TabsTrigger key={role.id} value={role.id} className="flex items-center gap-2">
                  {role.icon}
                  <span className="hidden sm:inline">{role.title.split(" ")[1]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {roles.map((role) => (
              <TabsContent key={role.id} value={role.id} className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center gap-3">
                        <div className={`inline-flex rounded-xl bg-gradient-to-br ${role.color} p-2.5 text-white`}>
                          {role.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{role.title}</h3>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {role.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <p>{feature}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
