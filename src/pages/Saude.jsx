import pet_care1 from "../assets/imgs/pages/saude/pet-care1.png"
import foto_hvr from "../assets/imgs/pages/saude/HVR.jpg"
import foto_hrv_recepcao from "../assets/imgs/pages/saude/HRV-recepcao.jpg"

import styles from "../styles/pages/saude.module.css"
import CardIndication from "../components/CardIndication"

const Saude = () => {
  return (
    <main className={styles.healthContainer}>

      <section className={styles.headerHealthContainer}>
        <h2>Saúde de qualidade gratuita ou mais em conta para alivar o seu bolso.</h2>
        <img src={pet_care1} alt="Foto do Hospital Veterinario do Recife" />
      </section>

      <section className={styles.hospitalHvrContainer}>
        <h3>Primeiramente, deixa eu te apresentar o Hospital Veterinario do Recife (HVR)</h3>

        <div className={styles.imagesHospital}>
          <img src={foto_hvr} alt="Foto do Hospital Veterinario do Recife" />
          <img src={foto_hrv_recepcao} alt="Foto da recepção do Hospital Veterinario do Recife" />
        </div>

        <p>Localizado em Recife e exclusivo para a população recifense, o hospital possui:</p>

        <ul>
          <li> Recepção;</li>
          <li> Ambulatórios;</li>
          <li> Bloco cirúrgico;</li>
          <li> Sala de pós-cirúrgico;</li>
          <li> Centro de diagnóstico por imagem contendo ultrassom e raio-x;</li>
          <li> Laboratório de hematologia ;</li>
          <li> Sala de vacinação/odontológica;</li>
          <li> Administração;</li>
          <li> Estacionamento.</li>

        </ul>

        <h4>"Massa, mas onde fica ?"</h4>

        <p>Na Av. Prof. Estevão Francisco da Costa, s/n - Cordeiro, Recife - PE, CEP: 50620-450</p>

        <h4>"E quem pode usar ?"</h4>

        <p>O hospital é exclusivo para os moradores de Recife. Na recepção, é pedido o comprovante de residência em seu nome para que você possa ser atendido.</p>

        <h4>"Quais são os serviços que o hospital oferece ?"</h4>

        <h5>Cirurgias</h5>

        <p>Cirurgias de baixa e média complexidade para cães e gatos. Esses procedimentos são definidos, agendados e executados pela equipe de veterinários do Hospital, após consulta clínica.</p>

        <h5>Castração</h5>

        <p>O HVR fornece castração gratuita para cães e gatos.</p>

        <h5>Exames de Ultrassom</h5>

        <p>O Hospital disponibiliza exames de diagnóstico por imagem, dentre eles ultrassonografia. Esses procedimentos são definidos, agendados e executados pela equipe de veterinários do Hospital. Só são realizados exames solicitados por médicos veterinários do HVR, após consulta no próprio hospital.</p>

        <h5>Exames de Raio-X</h5>

        <p>Exames de diagnóstico por imagem, dentre eles exames de Raio-X. Esses procedimentos são definidos, agendados e executados pela equipe de veterinários do Hospital. Só são realizados exames solicitados por médicos veterinários do HVR, após consulta no próprio hospital.</p>

        <h5>Vacinação</h5>

        <p>O HVR disponibiliza vacinas antirrábicas para caninos e felinos de Recife. Para que o animal receba a vacina, não é necessário agendamento. O tutor deverá levar seu animal no Hospital Veterinário durante seu horário de funcionamento (7h às 18h), portando original e cópia do RG, CPF e comprovante de residência de Recife em seu nome. Caso o animal não possua carteira de vacinação, ganhará uma carteirinha do Hospital Veterinário do Recife, Robson José Gomes de Melo.</p>

        <h5>Atendimentos emergenciais</h5>

        <p>O Hospital Veterinário do Recife oferece atendimentos emergenciais a caninos e felinos. No hospital, o animal passará por uma triagem realizada por um médico veterinário, a fim de verificar se o animal está em situação emergencial.</p>

        <h5>Exame hematológico</h5>

        <p>O HVR disponibiliza, exclusivamente para os animais atendidos no Hospital, exame hematológico (hemograma), que auxilia o veterinário na sua atuação, gerando um melhor resultado no atendimento do animal.</p>

        <h4>"E o que eu preciso mostrar para ser atendido ? </h4>

        <p>Para qualquer procedimento, você deve ser apresentar os seguintes documentos:<br />
          <br />
          RG;<br />
          CPF;<br />
          Comprovante recente de residência do Recife no nome do tutor.<br />
          <br />
          Além disso, o tutor deve vim acompanhado do seu pet.
        </p>

      </section>

      <section className={styles.hospitalVetContainer}>

        <h3>"Beleza, mas não sou de Recife, sou da RMR, chorou pra mim ?"</h3>

        <p>De jeito nenhum, você pode recorrer ao Hospital Veterinário da Universidade Federal Rural de Pernambuco (UFRPE).</p>

        <p>Localizado dentro da universidade, na rua Dom Manuel de Medeiros, s/n - Dois Irmãos, Recife, nas dependências do Departamento de Medicina Veterinária. </p>

        <p>O Hospital Veterinário da universidade atende por agendamento prévio. Semanalmente são disponibilizados, em média, 40 atendimentos para cães e gatos. O agendamento para o atendimento de pets é realizado todas as segundas-feiras, a partir das 10h, pelo número: (81) 3320-6441.</p>

        <p>Além de atendimento clínico geral para animais, o Hospital Veterinário da UFRPE também realiza atendimento em dermatologia, oncologia, oftalmologia e exames para os animais. Sendo essas especialidades oferecidas apenas para animais já atendidos no proprio hospital.</p>

        <p>Para todas as especialidades, o atendimento é agendado no primeiro dia útil de cada mês, a partir das 10h, pelo número: (81) 3320-6411. Para exames, o agendamento é feito de segunda a sexta-feira, a partir das 9h, pelo: (81)3320-6410.</p>

      </section>

      <div className={styles.plusContainerTitle}>
        <h3>Ainda não acabou, visse, olha esse plus:</h3>

        <p>Se você ainda precisar de petshops, farmácias, veterinários, aqui vão mais dicas:</p>
      </div>

      <div className={styles.plusContainerContent}>

        < CardIndication
          nome="Villa Pet Shop"
          descrição="Artigos para seu pet e clínica veterinária com consulta por 70 reais."
          contato="(WhatsApp) 973256094"
          linkMaps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0902613019903!2d-34.9266949!3d-8.0922776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1eeb107ba3d3%3A0x8952dc9c9548c9d4!2sAv.%20Tapaj%C3%B3s%2C%20304%20-%20Est%C3%A2ncia%2C%20Recife%20-%20PE%2C%2050860-010!5e0!3m2!1spt-BR!2sbr!4v1689982567634!5m2!1spt-BR!2sbr"
        />

        < CardIndication
          nome="Farma Pet"
          descrição="Farmácia especializada em manipulação de medicamentos veterinários e também contém artigos para seu pet."
          contato="(WhatsApp) 99949-0005"
          linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15801.609624665636!2d-34.8869814!3d-8.0603715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1952d6a41d49%3A0xa7f9c32b1ef21fda!2sFarmaF%C3%B3rmula%20Pet%20Recife!5e0!3m2!1spt-BR!2sbr!4v1689982949461!5m2!1spt-BR!2sbr"
        />

        < CardIndication
          nome="G-VET"
          descrição="Clínica veterinária e petshop."
          contato="(81) 99154-5553"
          linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.138794099326!2d-34.8667798!3d-7.9695012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1712a81d2163%3A0x959b78bf5a413680!2sG-%20VET%20Dra%20Geisiane%20-%20Preven%C3%A7%C3%A3o%20e%20Sa%C3%BAde%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sbr!4v1689983136607!5m2!1spt-BR!2sbr"
        />

        < CardIndication
          nome="NutriPet"
          descrição="Casa de rações e variedades, tudo no precinho."
          contato="Não informado"
          linkMaps="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15800.712539297874!2d-34.9897577!3d-8.0833082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1dc087f96b5b%3A0x3f998b4c3ddf8746!2sCASA%20DE%20RA%C3%87%C3%83O%20E%20VARIEDADES%20-%20B.A.S.%20NUTRIPET!5e0!3m2!1spt-BR!2sbr!4v1689983223353!5m2!1spt-BR!2sbr"
        />

      </div>

    </main>
  )
}

export default Saude