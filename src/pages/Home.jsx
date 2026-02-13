import Hero from "../components/Hero";
import skillcard from "../components/SkillCard";

export default function home(){
    return (
     <>
     <Hero />

     <section id="skill" classname="section">
        <h2>Keahlian saya</h2>
        <div classname="grid">
        <skillcard title="HTML & CSS" desc="Membuat tampilan website modern" icon="🌐"/>
        <skillcard title="Javascript" desc="Logika dan interaksi web dengan user" icon="⚡"/>
        <skillcard title="React" desc="Single Page Application" icon="🌀"/>
        <skillcard title="Laravel" desc="Backend & API" icon="🦣"/>
        
        </div>
        </section>
        </>

    );
}