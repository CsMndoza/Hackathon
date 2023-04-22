const botones = document.querySelectorAll('.abc button');



botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {

        const letter = boton.innerHTML;

        if (letter == "A"){
            htmlnuevo=
            `<table>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Abandono de familia: </span>
                <span style="display:inline;">Delito que comete el que deja de cumplir, 
                    pudiendo hacerlo, los deberes legales de asistencia inherentes a la patria potestad, 
                    tutela o matrimonio, de alguna de las formas que previene el precepto.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Abandono del hogar: </span>
                <span style="display:inline;">El abandono injustificado del hogar es causa 
                    de separación conyugal.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Abintestato: </span>
                <span style="display:inline;">Sin testamento. Procedimiento sobre 
                    la herencia y adjudicación de los bienes de la persona fallecida sin 
                    testamento válido.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Abogado del Estado:  </span>
                <span style="display:inline;">Letrado que ostenta la representación y defensa
                     de los intereses del Estado. Hoy se denominan Letrados del Estado.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Abuso de derecho: </span>
                <span style="display:inline;">Se produce cuando se pretende ejercitar una 
                    acción utilizándola de modo anormal y contradictorio respecto de la armónica convivencia social.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Acción popular:  </span>
                <span style="display:inline;">Aquella que puede utilizar cualquier ciudadano 
                    para impugnar un acto lesivo para el interés general. Es decir, para ejercitar la acción penal.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Acreedor: </span>
                <span style="display:inline;">Sujeto activo de una obligación. El que tiene 
                    derecho a pedir el cumplimiento de una obligación.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Acta:  </span>
                <span style="display:inline;">Relación escrita de lo sucedido, 
                    tratado o acordado por varias personas. En todo juicio o comparecencia
                     en un Juzgado se hace un acta.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Acto administrativo:  </span>
                <span style="display:inline;">Decisión emanada de autoridades administrativas 
                    en el ejercicio de sus funciones, que afecta a derechos, deberes e intereses de los ciudadanos.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Admitir a trámite:  </span>
                <span style="display:inline;">Actuación oficial mediante la cual un organismo acepta resolver lo que se solicita.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Agravantes:  </span>
                <span style="display:inline;"> Aquellas circunstancia que pueden concurrir en la ejecución del delito mediante 
                    las cuales la gravedad excede de aquel término medio que la ley considere como tipo al definir el delito.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">A instancia de parte:  </span>
                <span style="display:inline;">Aquellos casos en los que el Juez, el Fiscal u otro organismo inician una
                     investigación, juicio o procedimiento (actuación judicial) al solicitarlo el interesado.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Allanamiento a la demanda:  </span>
                <span style="display:inline;">Conformidad del demandado con lo solicitado por el demandante.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Anotación preventiva:  </span>
                <span style="display:inline;">Anotación provisional que se hace en el Registro de la Propiedad, o
                     en cualquier otro registro público, cuando no puede ser inscrito definitivamente, para asegurar
                      el cumplimiento de resoluciones judiciales con la eficacia de cualquier derecho real. </span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Apelación:  </span>
                <span style="display:inline;">Recurso por el que se solicita de un tribunal superior, la revocación 
                    total o parcial de una resolución dictada por otro. En ese caso pasa de la primera a la segunda instancia.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Apremio:  </span>
                <span style="display:inline;">Mandamiento de autoridad en virtud del cual se obliga a una persona a 
                    que haga o cumpla una cosa.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Apud acta:  </span>
                <span style="display:inline;">Actuaciones judiciales que se hacen constar por acta unida al procedimiento 
                    de que se trate (un ejemplo muy frecuente será el apoderamiento de procurador mediante comparecencia 
                    del interesado ante el secretario judicial).</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Arancel:  </span>
                <span style="display:inline;"> Tarifa oficial que determina los derechos de ciertos profesionales.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Arbitraje:  </span>
                <span style="display:inline;"> Forma de solucionar conflictos mediante el 
                    sometimiento de los interesados a la decisión de un tercero (árbitro).</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Arras:  </span>
                <span style="display:inline;"> Lo que se da en prenda o señal de cumplimiento de un contrato.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Asistencia Jurídica Gratuita:  </span>
                <span style="display:inline;">Derecho que tienen las personas que carecen de suficientes 
                    medios económicos a que el Estado asuma los gastos derivados de los procesos judiciales 
                    (gastos de abogados, procuradores y otros profesionales; costes de realizar las pruebas, etc...).</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Atestado:  </span>
                <span style="display:inline;">Documento extendido por la policía judicial y que contiene la 
                    constatación de un hecho, averiguaciones practicadas y cualesquiera otras diligencias 
                    policiales encaminadas a la averiguación de un hecho delictivo.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Audiencia: </span>
                <span style="display:inline;">Acto de oír un juez o tribunal a las partes y testigos para 
                    decidir los pleitos y causas. Tribunal de Justicia Colegiado.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Auto: </span>
                <span style="display:inline;">Resolución judicial motivada. Forma que ha de adoptar la 
                    resolución judicial cuando decida recurso contra providencias, cuestiones incidentales, 
                    presupuestos procesales, nulidad de procedimiento, es decir, cuando no se requiera sentencia.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Autoridad de cosa juzgada: </span>
                <span style="display:inline;">Se dice de aquella cuestión o litigio que ha sido resuelta definitivamente,
                     sin posibilidad de recursos ni de nuevo planteamiento.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Avenencia:  </span>
                <span style="display:inline;">Convenio, transacción. Acuerdo de las partes en un procedimiento</span>
                </td>
            </tr>
            
        </table>
              `

            contenedor=document.getElementById("defa");
            contenedor.innerHTML=htmlnuevo;
        }
        if (letter == "B"){
            htmlnuevo=
            `<table>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bastantear: </span>
                <span style="display:inline;">Declaración de que el poder es suficiente
                 para actuar como apoderado de otra persona, en un asunto determinado.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bienes accesorios: </span>
                <span style="display:inline;">Los que dependen de otros o a ellos se está adherido.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bienes inmuebles: </span>
                <span style="display:inline;">Aquellos bienes que no se pueden trasladar de
                 sitio o ubicación sin que éstos se destruyan o sufran deterioro.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bienes ab intestato: </span>
                <span style="display:inline;">Son los bienes que deja una persona al fallecer
                 sin que haya dejado testamento o habiéndolo dejado, éste es nulo o ha perdido su validez.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bienes indivisos: </span>
                <span style="display:inline;">Los que pertenecen a dos o más personas sin 
                que esté individualizada la parte concreta que pertenece a cada una de ellas.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Bloqueo registral: </span>
                <span style="display:inline;">Anotación preventiva con plazo de vigencia de 60 días,
                 con el fin de garantizar el ingreso a los Registros Públicos de un futuro título durante
                  dicho plazo, no aceptándose otro hasta que termine el plazo señalado.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Buena fe: </span>
                <span style="display:inline;">Conducta ajustada a la ley. </span>
                </td>
            </tr>
            
        </table>
              `

            contenedor=document.getElementById("defa");
            contenedor.innerHTML=htmlnuevo;
        }
        if (letter == "L"){
            htmlnuevo=
            `<table>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Lanzamiento: </span>
                <span style="display:inline;">Diligencia que ordena la ejecución de una sentencia por 
                la cual, se obliga al desalojo de un inmueble o a desposeer una cosa.
                Diligencia propia de los juicios de desahucio.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Laudo: </span>
                <span style="display:inline;">En derecho, resolución dictada por un árbitro que resuelve 
                definitivamente un conflicto, con fuerza ejecutiva ante los tribunales ordinarios.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Legal: </span>
                <span style="display:inline;">Aquello que es conforme a Derecho, a la Ley.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Legar: </span>
                <span style="display:inline;">Dejar a una persona en un testamento determinados bienes.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Legítima: </span>
                <span style="display:inline;">Parte de los bienes de la que la persona que hace testamento no 
                puede disponer, por reservarla la Ley, a determinados herederos designados “ forzosos “</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Lego: </span>
                <span style="display:inline;">Persona no instruida o versada en una materia.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Levantar el embargo: </span>
                <span style="display:inline;">Suprimir o dejar sin efecto la prohibición judicial de disponer o 
                enajenar unos bienes.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Libelo: </span>
                <span style="display:inline;">Escrito en el que se difama a alguien.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Libertad bajo fianza: </span>
                <span style="display:inline;">Libertad provisional de un acusado previo depósito de la cuantía 
                económica establecida por el Juez.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Libertad condicional: </span>
                <span style="display:inline;">Libertad que se concede al penado en el último período de su condena, 
                por observancia de buena conducta.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Libertad  vigilada: </span>
                <span style="display:inline;">Medida de seguridad consistente en tener bajo vigilancia judicial o del 
                organismo competente, a los sujetos con inclinaciones delictivas.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Licitar: </span>
                <span style="display:inline;">Ofrecer precio en una subasta.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Litigante: </span>
                <span style="display:inline;">Persona física o jurídica que defiende una causa ante un Juez o Tribunal 
                en su nombre o en representación de un tercero.</span>
                </td>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Litigio: </span>
                <span style="display:inline;">Pleito, controversia.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Litisconsorio: </span>
                <span style="display:inline;">Presencia en procedimiento judicial de una pluralidad de partes, ya sean, 
                demandantes, demandados o por ambas partes.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Litisexpensas: </span>
                <span style="display:inline;">Cantidad dineraria que fija el Juez en las medidas provisionales de los 
                procesos matrimoniales, que un cónyuge ha de entregar al otro, cuando este último, carece de recursos 
                suficientes para hacer frente a los gastos procesales.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Litispendencia: </span>
                <span style="display:inline;">Pleito que aún no ha concluido, pendiente de resolución.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Lucro cesante:: </span>
                <span style="display:inline;">Ingresos o ganancias que una persona deja de percibir, a resultas 
                de la actuación de un tercero.</span>
                </td>
            </tr>
        </table>
              `

            contenedor=document.getElementById("defa");
            contenedor.innerHTML=htmlnuevo;
        }
        if (letter == "V"){
            htmlnuevo=
            `<table>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vacatio legis: </span>
                <span style="display:inline;">Periodo de tiempo que transcurre entre el momento de 
                publicación de una ley y su entrada en vigor. </span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vencer: </span>
                <span style="display:inline;">Hacerse exigible una deuda o una obligación, por haber 
                llegado el término fijado para su cumplimiento. </span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vencimiento: </span>
                <span style="display:inline;">Transcurso del plazo legal o convencional para el 
                cumplimiento de una obligación o plazo procesal.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Venia: </span>
                <span style="display:inline;">Consentimiento, permiso otorgado por una autoridad.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Veredicto: </span>
                <span style="display:inline;">DEs la que se celebra cuando procede a presencia del juez o
                 tribunal, oyendo a los defensores o representantes de las partes y del público que desee 
                 asistir antes de dictar el fallo. Juicio oral.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vista pública: </span>
                <span style="display:inline;">Persona no instruida o versada en una materia.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Veto: </span>
                <span style="display:inline;">Potestad atribuida según las Constituciones, al jefe 
                del Estado o a la segunda Cámara, para objetar una ley.span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vicio de la voluntad: </span>
                <span style="display:inline;">Aquellos defectos que hacen anulable la declaración de 
                voluntad, excluyéndose las anormalidades afectantes a la voluntad que hacen que no exista. 
                Estos vicios pueden estar causados por la falta de conocimiento, o por la falta de 
                libertad.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Libertad bajo fianza: </span>
                <span style="display:inline;">Libertad provisional de un acusado previo depósito de la cuantía 
                económica establecida por el Juez.</span>
                </td>
            </tr>
            <tr>
                <td>
                <span style="display:inline; font-weight:bold;">Vigente: </span>
                <span style="display:inline;">Se aplica a las leyes, ordenanzas, costumbres y demás disposiciones 
                desde su publicación a su derogación. En vigor, de observancia obligatoria.</span>
                </td>
            </tr>
        </table>
              `

            contenedor=document.getElementById("defa");
            contenedor.innerHTML=htmlnuevo;
        }

    }); 
});
