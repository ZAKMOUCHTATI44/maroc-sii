import CallToAction from "./CallToAction"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const Form = () => {
  return (
    <div className="bg-[#FFFF] text-main-color p-12 rounded-2xl flex flex-col gap-5 my-12">
      <h2 className="text-2xl font-semibold text-center">
      Contactez-nous dès maintenant 
      </h2>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="firstName">Nom</Label>
      <Input id="firstName" placeholder="Votre Nom" />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="email">Prénom</Label>
      <Input type="email" id="email" placeholder="Votre Prénom" />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Votre Email" />
    </div>
    <div className="grid items-center gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Votre Message" />
    </div>
    <div className="flex justify-center">
      <CallToAction title="Contactez" />
    </div>
  </div>
  )
}

export default Form